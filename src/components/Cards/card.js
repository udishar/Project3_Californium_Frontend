import React, { useEffect, useState } from "react";
import cardStyle from "../Cards/card.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Dialog from "@mui/material/Dialog";
import CustomInputFields from "../../atoms/InputFields/input";
import CustomButton from "../../atoms/button/button";
import { Link, useNavigate } from "react-router-dom";
import { tweetData , updatedActiveProfile} from "../../atom";
import { useRecoilValue,useRecoilState } from "recoil";
import img from '../Cards/3.jpg'
// import defaultImage from './3.jpg';

export default function Card() {
  const [data,setData]=useRecoilState(tweetData)
  const [likes, setLikes] = useState(100);
  const[input , setInput] = useState("")
  const [updateActiveData, setUpdateActiveData]=useRecoilState(updatedActiveProfile)

  
  
  const [isopenComment, setIsOpenComment] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const [clickedIndex, setClickedIndex]=useState("")
 

  const navigate = useNavigate()

useEffect(()=>{ console.log("useEffect running")},[updateActiveData])

 
function handleProfileIcon(index,item){
  // console.log(item.handlerName)
  // const updatedData= updateActiveData.splice(index,1)
  // setUpdateActiveData([...updatedData])
  console.log(updateActiveData, "===============================")

     navigate(`/tweetProfile?id=${item.id}`)
    // navigate(`/tweetProfile?handlerName=${item.index}`)
}
let userName = JSON.parse(localStorage.getItem("userData"));
 function addReply(){
  const newReply=[{
    
    
    
      profileIcon: <img src={img} className={cardStyle.img}/>,
     name:`${userName[0].phoneNumber}`,
     handlerName: `@${userName[0].username}`,
    tweetReplyText: input
  
    
  }]
    console.log(newReply)
    setInput("")
   const newData= data[clickedIndex].tweets.map((item)=>item.TweetReplies)
   console.log([...newData,newReply], "after spreading")
    // setData([newReply,...newData])
    // console.log(newData , "hihihihi")

  }
   
  
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

  function handleViews() {
    setViewOpen(true);
  }
console.log(clickedIndex,"CLICKEDindex")
  function handleComment(index) {
    setClickedIndex(index)
    setIsOpenComment(true);
  }

  function handleReply(inputReply){
console.log(inputReply)
setInput(inputReply)
  }

  function handleClose() {
    setIsOpenComment(false);
  }
  function handleDismiss() {
    setViewOpen(false);
  }
  function handleTweet(index,item){
    // data.splice(index,1)
    navigate(`/tweetReplies?id=${item.id}`)

  }
    return (
        <>
        {isViewOpen ?
      <Dialog
        open={isViewOpen}
        PaperProps={{
          style: {
            borderRadius: "20px",
            padding: "3rem",
          },
        }}
      >
        <h1>Views</h1>
        <p>
          Times This Tweet was seen.To learn more, visit the{" "}
          <Link style={{ color: "black", fontWeight: "800" }}>Help Center</Link>
        </p>
        <CustomButton
          btnVal="Dismiss"
          onClicking={handleDismiss}
          style={{
            marginLeft: "4rem",
            marginTop: "2rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "20px",
            fontSize: "1.5rem",
            width: "20rem",
          }}
        />
      </Dialog> :""}

  
 
    
        
        {isopenComment?

      <Dialog
        open={isopenComment}
        PaperProps={{
          style: {
            borderRadius: "20px",
            marginBottom: "18em",
          },
        }}
      >
        <div className={cardStyle.dailog}>
          <CustomInputFields
            abc="Tweet Your Reply"
            style={{
              padding: "5rem",
              border: "none",
              outline: "none",
              fontSize: "1.5rem",
            }}
            handleChange={handleReply}
               value={input}
          />
          <div className={cardStyle.btn}>
            <CustomButton
              btnVal="Reply"
              style={{
                backgroundColor: " rgb(11, 109, 220)",
                color: "white",
                width: "7rem",
                borderRadius: "20px",
              }}
               onClicking={addReply}
            />
          </div>
          <CustomButton
            btnVal="Close"
            style={{ marginTop: "3rem", fontWeight: "800" }}
            onClicking={handleClose}
          />
        </div>
      </Dialog> :""}
   

 
    <div>
      {console.log(data,"from card")}
      {data.map((item,index) => (
        <div className={cardStyle.main}>
          <div className={cardStyle.navContainer}>
            <div className={cardStyle.container}>
              
              <div onClick={()=>handleProfileIcon(index,item)}>
              {item.profileIcon}
              </div>
              <div className={cardStyle.name}>{item.name} </div>
              <VerifiedIcon />
              {item.handlerName}
            </div>

            <div className={cardStyle.more}>{item.more}</div>
          </div>
          <div className={cardStyle.component2} onClick={()=>handleTweet(index,item)}>
          <div className={cardStyle.img_caption}>
            <div className={cardStyle.caption}> {item.tweets[0].tweetText}</div>
            <div className={cardStyle.links}>{item.refLink} </div>
            <div className={cardStyle.hashtags}> {item.hastags}</div>
            {
              item.tweets[0].tweetPic ?

              <img
              src={item.tweets[0].tweetPic}
              alt="Image Here"
              className={cardStyle.img}
            />
            : 
             null
          
        
            }
            </div>
            
          </div>
          <div className={cardStyle.icons}>
            <div onClick={()=>handleComment(index)}>{item.icons1}</div>
            <div>
              {item.icons2}
              {item.tweets[0].retweetCount}
            </div>
            <div onClick={()=>handleLike(index,item)}>
              {item.icons3}
              {likes}
            </div>
            <div onClick={handleViews}>
              {item.icons4}
              {item.tweets[0].viewsCount}
            </div>
            {item.icons5}
            </div>
          
        </div>
      ))}
    </div>
 </> )}

