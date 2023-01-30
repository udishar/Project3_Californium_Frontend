import React, { useState } from 'react';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import tweetStyle from '../TrendingTweets/TrendingTweet.module.css'


export default function CustomTweets(){
     const [isopen , setIsopen] = useState(false)

    let trendsArr=[
        {
            id:1,
            activity:"Treanding in India",
            activityHandler:"#RailwayNewBhartiDo",
            tweeted:"Treanding with #NarendraModi",
            icon:<MoreHorizIcon/>,
            isNotInterested:true
        },
        {
            id:2,
            activity:"Sports . Treanding ",
            activityHandler:"Pujara",
            tweeted:"2,228 Tweets",
            icon:<MoreHorizIcon/>,
            isNotInterested:true
        },
        {
            id:3,
            activity:"Treanding in India",
            activityHandler:"Jammu & Kashmir",
            tweeted:"6,504 Tweets",
            icon:<MoreHorizIcon/>,
            isNotInterested:true
        },
        {
            id:4,
            activity:"Indian Premier League . Treanding ",
            activityHandler:"#MSDhoni",
            tweeted:"2,001 Tweets",
            icon:<MoreHorizIcon/>,
            isNotInterested:true
        },
        {
            id:5,
            activity:"Treanding in India",
            activityHandler:"National Security Advisor",
            tweeted:"4,253 Tweets",
            icon:<MoreHorizIcon/>,
            isNotInterested:true
        }
    ];

    const [trendsList , setTrendList]=useState(trendsArr)
    

    function handleClick(i){
        
        setIsopen(true)
         

    }
    function handleInterest(i){
        trendsList.splice(i,1)
        setTrendList([...trendsList])
    // console.log(i)
        // const clickedIndex=trendsArr.map((ele)=>ele.activityHandler===items.activityHandler)
        // console.log(clickedIndex)
       //  find index of clicked item
    //    clickedIndex[0]=false

    }
   

     return(
        <>
        {/* {isopen?
        <div className={tweetStyle.box}>
         <div onClick={()=>handleInterest()} > Not Interested</div>
         <div>This trend is harmful or spammy</div>
         </div>
         
         
         :""} */}
  

       <div className={tweetStyle.container}>
    {trendsList.map((items,i)=>(
        // console.log(i,"========")
    items.isNotInterested && <div key={items.id} className={tweetStyle.list}>
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
        
        <div onClick={()=>handleClick(i)} className={tweetStyle.icon}>
        {items.icon}
        </div>
        {isopen
         &&
        <div className={tweetStyle.box}>
         <div onClick={()=>handleInterest(i) }  className={tweetStyle.interest}> Not Interested</div>
         {/* {console.log(i,"kfjfkdfh")} */}
         <div>This trend is harmful or spammy</div>
         </div>
}
         
        {/* //  :""} */}

        </div>
        </div>
        </div>
        
    ))}
    </div>

    </>
)

}