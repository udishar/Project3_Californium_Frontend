import React, { useState } from "react";
import cardStyle from "../Cards/card.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import Dialog from "@mui/material/Dialog";
import CustomInputFields from "../../atoms/InputFields/input";
import CustomButton from "../../atoms/button/button";
import { Link } from "react-router-dom";
import { tweetData } from "../../atom";
import { useRecoilValue } from "recoil";

export default function Card() {
  const [likes, setLikes] = useState(tweetData);
  
  
  const [isopenComment, setIsOpenComment] = useState(false);
  const [isViewOpen, setViewOpen] = useState(false);
  const data=useRecoilValue(tweetData)

 

  function handleLike(index,item) {
    console.log(index)
    // console.log(item,"item")
    const newLike=item.likesCount +1
    console.log(newLike)
    
    
    setLikes({...likes,newLike})
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
      {data.map((item,index) => (
        <div className={cardStyle.main}>
          <div className={cardStyle.navContainer}>
            <div className={cardStyle.container}>
              {item.profileIcon}
              <div className={cardStyle.name}>{item.name} </div>
              <VerifiedIcon />
              {item.handlerName}
            </div>

            <div className={cardStyle.more}>{item.more}</div>
          </div>
          <div className={cardStyle.img_caption}>
            <div className={cardStyle.caption}> {item.tweetText}</div>
            <div className={cardStyle.links}>{item.refLink} </div>
            <div className={cardStyle.hashtags}> {item.hastags}</div>
            <img
              src={item.tweetPic}
              alt="Image Here"
              className={cardStyle.img}
            />
          </div>
          <div className={cardStyle.icons}>
            <div onClick={handleComment}>{item.icons1}</div>
            <div>
              {item.icons2}
              {item.retweetCount}
            </div>
            <div onClick={()=>handleLike(index,item)}>
              {item.icons3}
              {item.likesCount} 
            </div>
            <div onClick={handleViews}>
              {item.icons4}
              {item.viewsCount}
            </div>
            {item.icons5}
          </div>
        </div>
      ))}
    </div>
 </> )}

