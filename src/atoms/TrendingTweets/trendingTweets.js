import React from 'react';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import tweetStyle from '../TrendingTweets/TrendingTweet.module.css'


export default function CustomTweets(){

    let trendsArr=[
        {
            activity:"Treanding in India",
            activityHandler:"#RailwayNewBhartiDo",
            tweeted:"Treanding with #NarendraModi",
            icon:<MoreHorizIcon/>
        },
        {
            activity:"Sports . Treanding ",
            activityHandler:"Pujara",
            tweeted:"2,228 Tweets",
            icon:<MoreHorizIcon/>
        },
        {
            activity:"Treanding in India",
            activityHandler:"Jammu & Kashmir",
            tweeted:"6,504 Tweets",
            icon:<MoreHorizIcon/>
        },
        {
            activity:"Indian Premier League . Treanding ",
            activityHandler:"#MSDhoni",
            tweeted:"2,001 Tweets",
            icon:<MoreHorizIcon/>
        },
        {
            activity:"Treanding in India",
            activityHandler:"National Security Advisor",
            tweeted:"4,253 Tweets",
            icon:<MoreHorizIcon/>
        }
    ];

    let tweetList=trendsArr;

return(
       <div className={tweetStyle.container}>
    {tweetList.map((items)=>(
        <div  className={tweetStyle.list}>
            <div className={tweetStyle.data}>
                <div className={tweetStyle.lowerContainer}>
                    <div>
                <div className={tweetStyle.para}>
        {items.activity}
        </div>
        <div className={tweetStyle.heading}>
        {items.activityHandler}
        </div>
        <div className={tweetStyle.text}>
        {items.tweeted}
        </div>
        </div>
        
        <div className={tweetStyle.icon}>
        {items.icon}
        </div>
        
        </div>
        </div>
        </div>
        
    ))}
    </div>


)

}