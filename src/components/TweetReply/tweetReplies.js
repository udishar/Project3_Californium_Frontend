import React from 'react'
import { useRecoilState } from 'recoil'
import { tweetData } from '../../atom'
import style from '../TweetReply/tweetReply.module.css'
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ShowTweetReplies(){
const [dataList, setDataList]=useRecoilState(tweetData)
    
function handleLike(){

}
function handleViews(){
    
}
    return(
        <>
        {dataList.map((item,index)=>(
            <div>
            
            <div className={style.main} >
                <div className={style.head}>
                <div><ArrowBackIcon/></div>
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
            </div>
        ))}     
        </>
    )
}