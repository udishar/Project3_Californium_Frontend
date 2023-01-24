import React, { useEffect, useState } from "react";
import CustomButton from "../../atoms/button/button";
import CustomInputFields from "../../atoms/InputFields/input";
import Card from "../Cards/card";
import middleStyle from "../Middle/middle.module.css";
import Avatar from "@mui/material/Avatar";
import { tweetData } from "../../atom";
import { useRecoilState } from "recoil";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Middle() {
  const [newTweetText, setNewTweetText] = useRecoilState(tweetData);
  const [input, setInput] = useState("");
  console.log(newTweetText);

  function handleNewTweet(inputTweet) {
    setInput(inputTweet);
  }
  function handleClick() {
    console.log("clicked");
    
    const newTweet = {
      profileIcon: (
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      ),
      name: "Udisha Arrawatia",
      handlerName: "@udisha_11",
      tweetText: input,
      icons1:<ChatBubbleOutlineIcon/>,
            icons2:<SwapCallsIcon/>,
            icons3:<FavoriteBorderIcon/>,
            icons4: <EqualizerIcon/>,
           icons5:<IosShareIcon/>,
           more:<MoreHorizIcon/>
    };
      
    setNewTweetText([newTweet, ...newTweetText]);
  }

  return (
    <div className={middleStyle.container}>
      <section className={middleStyle.section}>
        <header>
          <nav className={middleStyle.nav}>
            <div className={middleStyle.home}>Home</div>
            <div className={middleStyle.forYou}>
              <div className={middleStyle.div1}> For You</div>
              <div className={middleStyle.div3}> Following</div>
            </div>
          </nav>
        </header>
        <div className={middleStyle.div2}>
          <CustomInputFields
            abc="What's happening?"
            style={{
              outline: "none",
              padding: "2rem",
              width: "35rem",
              border: "none",
            }}
            handleChange={handleNewTweet}
            value={input}
          />
          <div className={middleStyle.btn}>
            <CustomButton
              btnVal="Tweet"
              style={{
                width: "6rem",
                borderRadius: "20px",
                margin: "1rem",
                color: "white",
                backgroundColor: "#007bff",
              }}
              onClicking={handleClick}
            />
          </div>
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Middle;
