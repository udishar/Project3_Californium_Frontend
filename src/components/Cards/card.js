

import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import IosShareIcon from '@mui/icons-material/IosShare';
import Avatar from "@mui/material/Avatar"
import img from '../Cards/3.jpg'
import cardStyle from '../Cards/card.module.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Card(){

    const arr=[
        {
        profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
        name:"Remy Sharp",
        hndlerName:"@Remy_Sharp",
        caption:"Go confidently in the direction of your dreams.",
        image:(<img src={img} className={cardStyle.img} />),
        icons1:<ChatBubbleOutlineIcon/>,
        icons2:<SwapCallsIcon/>,
        icons3:<FavoriteBorderIcon/>,
        icons4: <EqualizerIcon/>,
       icons5:<IosShareIcon/>,
       more:<MoreHorizIcon/>
 },
 {
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
        icons2:<SwapCallsIcon/>,
        icons3:<FavoriteBorderIcon/>,
        icons4: <EqualizerIcon/>,
       icons5:<IosShareIcon/>,
       more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
        icons2:<SwapCallsIcon/>,
        icons3:<FavoriteBorderIcon/>,
        icons4: <EqualizerIcon/>,
       icons5:<IosShareIcon/>,
       more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img} />),
    icons1:<ChatBubbleOutlineIcon/>,
        icons2:<SwapCallsIcon/>,
        icons3:<FavoriteBorderIcon/>,
        icons4: <EqualizerIcon/>,
       icons5:<IosShareIcon/>,
       more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
    icons2:<SwapCallsIcon/>,
    icons3:<FavoriteBorderIcon/>,
    icons4: <EqualizerIcon/>,
   icons5:<IosShareIcon/>,
   more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
    icons2:<SwapCallsIcon/>,
    icons3:<FavoriteBorderIcon/>,
    icons4: <EqualizerIcon/>,
   icons5:<IosShareIcon/>,
   more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img} />),
    icons1:<ChatBubbleOutlineIcon/>,
    icons2:<SwapCallsIcon/>,
    icons3:<FavoriteBorderIcon/>,
    icons4: <EqualizerIcon/>,
   icons5:<IosShareIcon/>,
   more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
    icons2:<SwapCallsIcon/>,
    icons3:<FavoriteBorderIcon/>,
    icons4: <EqualizerIcon/>,
   icons5:<IosShareIcon/>,
   more:<MoreHorizIcon/>
},
{
    profileIcon:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    name:"Remy Sharp",
    hndlerName:"@Remy_Sharp",
    caption:"Go confidently in the direction of your dreams.",
    image:(<img src={img} className={cardStyle.img}/>),
    icons1:<ChatBubbleOutlineIcon/>,
        icons2:<SwapCallsIcon/>,
        icons3:<FavoriteBorderIcon/>,
        icons4: <EqualizerIcon/>,
       icons5:<IosShareIcon/>,
       more:<MoreHorizIcon/>
}
]


    return(
        <div>
        {arr.map((item)=>(
            <div className={cardStyle.main}>
                <div className={cardStyle.navContainer}>
                <div className={cardStyle.container}>
                {item.profileIcon}{item.name} <VerifiedIcon/>{item.hndlerName}
                </div>
                <div className={cardStyle.more}>
                    {item.more}

                </div>
                </div>
                <div className={cardStyle.img_caption}>
               <div className={cardStyle.caption}> {item.caption}</div>
                {item.image}
                </div>
                <div className={cardStyle.icons}>
                {item.icons1}{item.icons2}{item.icons3}{item.icons4}{item.icons5}
                </div>
                </div>
        ))}
        </div>

    )
}