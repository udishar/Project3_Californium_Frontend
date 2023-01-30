import React, { useEffect, useState } from "react";
import CustomButton from "../../atoms/button/button";
import CustomInputFields from "../../atoms/InputFields/input";
import Card from "../Cards/card";
import middleStyle from "../Middle/middle.module.css";
import Avatar from "@mui/material/Avatar";
import { tweetData } from "../../atom";
import { useRecoilState } from "recoil";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from '../Middle/imagee/3.jpg'

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
      profileIcon: <img src={img} className={middleStyle.img}/>,
      name: "Udisha Arrawatia",
      handlerName: "@udisha_11",
  
    tweets :[{tweetText:input}],
      icons1:<ChatBubbleOutlineIcon/>,
            icons2:<SwapCallsIcon/>,
            icons3:<FavoriteBorderIcon/>,
            icons4: <EqualizerIcon/>,
           icons5:<IosShareIcon/>,
           more:<MoreHorizIcon/>
    };
      
    setNewTweetText([newTweet, ...newTweetText]);
    setInput("")
  }
  const iconList = [
    {
        icon : <CollectionsIcon
        className={middleStyle.icon}
        />,
        action : 'pickImage'

    },
    {
        icon : <GifBoxOutlinedIcon
        className={middleStyle.icon}
        />,

    },
    {
        icon : <ListOutlinedIcon
        className={middleStyle.icon}
        />,
    },
    {
        icon : <EmojiEmotionsOutlinedIcon
        className={middleStyle.icon}
        />,
    },
    {
        icon :  <LocationOnOutlinedIcon
        className={middleStyle.icon}
        />
    }  
]


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
          <div className={middleStyle.top}>
        <img src={img}  className={middleStyle.img}/>

          <CustomInputFields
            abc="What's happening?"
            style={{
              outline: "none",
              padding: "1rem",
              width: "30rem",
              border: "none",
            }}
            handleChange={handleNewTweet}
            value={input}
          />
          </div>
          <div className={middleStyle.btn}>
            
          {iconList.map(({icon})=>(
             <div> {icon}</div>
            ))}
            <CustomButton
              btnVal="Tweet"
              style={{
                width: "6rem",
                borderRadius: "20px",
                margin: "1rem",
                color: "white",
                backgroundColor: "#007bff",
                cursor:"pointer"
              }}
              onClicking={handleClick}
            />
            
          {/* </div> */}
         
          </div>
          

          <Card />
        </div>
      </section>
    </div>
  );
}

export default Middle;
