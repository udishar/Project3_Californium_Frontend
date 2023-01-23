import React from 'react';
import CustomTweets from '../../atoms/TrendingTweets/trendingTweets';
import trendStyle from '../Trend/trending.module.css'

function Trending(){

    return(
<div className={trendStyle.container}>
   
<div className={trendStyle.heading}>What's happening</div>
<div className={trendStyle.tweetTrend}>
<CustomTweets/>
</div>
<div className={trendStyle.show}>
    Show more
</div>

</div>
    )
}

export default Trending;