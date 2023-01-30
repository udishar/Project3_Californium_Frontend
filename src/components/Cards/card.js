import React, { useState } from "react";
import cardStyle from "../Cards/card.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Dialog from "@mui/material/Dialog";
import CustomInputFields from "../../atoms/InputFields/input";
import CustomButton from "../../atoms/button/button";
import { Link, useNavigate } from "react-router-dom";
import { tweetData } from "../../atom";
import { useRecoilValue,useRecoilState } from "recoil";
import defaultImage from './3.jpg';

export default function Card() {
  
  const [likes, setLikes] = useRecoilState(tweetData);
  console.log(likes, "===============================")
  
  
  const [isopenComment, setIsOpenComment] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const [data,setData]=useRecoilState(tweetData)

  const navigate = useNavigate()
  const navigation = useNavigate()
 

 
function handleProfileIcon(index,item){
  console.log(item.handlerName)
  
 

  navigate(`/tweetProfile?handlerName=${item.handlerName}`)


  

}
  function handleLike(index,item) {
    // console.log(index)
    // console.log(item)
    // console.log(item,"item")
    item.tweets[0].likesCount += 1
    const newLike=item.tweets[0]
    console.log(newLike)
    
    
     setLikes({...likes,newLike})
     console.log(likes,"after updates")
    // console.log(likes , "LIKES")
  }

  function handleViews() {
    setViewOpen(true);
  }

  function handleComment() {
    setIsOpenComment(true);
  }
  function handleClose() {
    setIsOpenComment(false);
  }
  function handleDismiss() {
    setViewOpen(false);
  }
  // function handleCard(item,index){
  //   console.log(index,"card click")
  //   navigation('/tweetReplies')


  // }

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
      {/* {console.log(data)} */}
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
            // null
            <img
              src={defaultImage}
              alt="Image Here"
              className={cardStyle.img}
            />
        
            }
            
          </div>
          <div className={cardStyle.icons}>
            <div onClick={handleComment}>{item.icons1}</div>
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
        </div>
      ))}
    </div>
 </> )}

