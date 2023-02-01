import React,{useState,useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { tweetData } from '../../atom'
import style from '../TweetReply/tweetReply.module.css'
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useSearchParams } from 'react-router-dom'
import Left from '../LeftSide/left'
import Right from '../Right/right'

export default function ShowTweetReplies(){
const [dataList, setDataList]=useRecoilState(tweetData)
const [searchParam] = useSearchParams();
const [activeProfile,setActiveProfile] =useState([])
const [likes, setLikes] = useState(100);
const navigate=useNavigate()

useEffect(()=>{
  console.log(searchParam.get("handlerName"))
  let clickingIndex=dataList.filter((ele)=>ele.handlerName == searchParam.get("handlerName"))
  console.log(clickingIndex)
  setActiveProfile(clickingIndex)
},[])
    

  function handleLike(index,item) {
    // console.log("hi")
    if(likes==101){
      setLikes(likes-1)
    }
    else{
      setLikes(likes+1)
    }
    // console.log(likes)
    
  }


function handleViews(){
    
}
function handleIcon(){
navigate("/")
}
    return(
        <>
       
        {activeProfile.map((item,index)=>(
            <div className={style.component}>
             <Left/>
            <div className={style.main} >
                <div className={style.head}>
                <div onClick={handleIcon}><ArrowBackIcon/></div>
            <h2 className={style.heading}>Tweet</h2>
            </div>
          <div className={style.navContainer}>
            <div className={style.container}>
              
              <div>
              {item.profileIcon}
              </div>
              <div className={style.name}>{item.name} </div>
              <VerifiedIcon />
              {item.handlerName}
            </div>

            <div className={style.more}>{item.more}</div>
          </div>
          <div className={style.img_caption}>
            <div className={style.caption}> {item.tweets[0].tweetText}</div>
            <div className={style.links}>{item.refLink} </div>
            <div className={style.hashtags}> {item.hastags}</div>
            <img
              src={item.tweets[0].tweetPic}
              alt="Image Here"
              className={style.img}
            />
          </div>
          <div className={style.icons}>
            <div>{item.icons1}</div>
            <div>
              {item.icons2}
              {item.tweets[0].retweetCount}
            </div>
            <div onClick={()=>handleLike(index,item)}>
              {item.icons3}
              {item.tweets[0].likesCount} 
            </div>
            <div onClick={handleViews}>
              {item.icons4}
              {item.tweets[0].viewsCount}
            </div>
            {item.icons5}
          </div>
          <div className={style.reply}>
          {item.tweets[0].TweetReplies[0].profileIcon}
          <div>
          {item.tweets[0].TweetReplies[0].name}
          {item.tweets[0].TweetReplies[0].handlerName}
          </div>
          {item.tweets[0].TweetReplies[0].tweetReplyText}
          </div>
          <div>
          {item.tweets[0].TweetReplies[1].profileIcon}
          {item.tweets[0].TweetReplies[1].name}
          {item.tweets[0].TweetReplies[1].handlerName}
          {item.tweets[0].TweetReplies[1].tweetReplyText}
          </div>
        </div>
        <Right/>  
            </div>
        ))}   
        
        </>
    )
}