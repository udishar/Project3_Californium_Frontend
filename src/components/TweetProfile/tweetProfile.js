

import React, { useState,useEffect } from "react";
import profileStyle from "../TweetProfile/tweet.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomButton from "../../atoms/button/button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecoilState } from "recoil";
import {tweetData , updatedActiveProfile} from '../../atom';
import Left from "../LeftSide/left";
import Right from "../Right/right";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate, useSearchParams } from 'react-router-dom';


function TweetProfile() {
    
    const [ProfileList , setProfileList]=useRecoilState(tweetData)
    // console.log(ProfileList,"kuch bhi")
    const [likes, setLikes] = useState(100);
    const [searchParams] = useSearchParams();
    const [activeProfile,setActiveProfile] =useRecoilState(updatedActiveProfile)
    const [isopenComment, setIsOpenComment] = useState(false);
    const [isViewOpen, setViewOpen] = useState(false);
   let navigate= useNavigate()
  
    
    useEffect(()=>{
        // console.log(searchParams.get("handlerName"))
        let clickingIndex=ProfileList.filter((ele)=>ele.id == searchParams.get("id"))
        // let clickingIndex=ProfileList.filter((ele)=>ele.handlerName == searchParams.get("handlerName"))
         console.log(clickingIndex, "after index")
        // console.log(ProfileList,"from tweet profile")
        setActiveProfile(clickingIndex)
    },[])
    useEffect(()=>{},[activeProfile])
     
function handleProfileIcon(index,item){
    // console.log(item.handlerName)
     navigate(`/tweetProfile?handlerName=${item.handlerName}`)
   }

function handleArrow(){
    
    navigate('/')
    
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

  function handleComment() {
    setIsOpenComment(true);
  }
  function handleTweet(index,item){
    navigate(`/tweetReplies?handlerName=${item.handlerName}`)
  }

function TabPanel(props) {
        const { children, value, index, } = props;

        return (
            <div>
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [file, setFile] = useState();
    function editProfile(e){
        // console.log("clickimg")
        setFile(URL.createObjectURL(e.target.files[0]));
    }useEffect(()=>{},[])

    return (

      <>
     

        <div className={profileStyle.container}>
        <Left/>
            
            <section className={profileStyle.section}>
            {activeProfile.map((item,index)=>(
                <>
                
                <div className={profileStyle.main}>
                <div className={profileStyle.top}>
                   
                    <div onClick={handleArrow}><ArrowBackIcon /></div>
                    
                    <h3>{item.name}</h3>
                    
                </div>
                <div>
                <h6>{item.tweets[0].tweetCount}</h6>
                </div>
                </div>
                 <div className={profileStyle.maintop}></div>

                <div className={profileStyle.mainbottom}>

                    <div className={profileStyle.img1}>
                        {/* <img src={item.}
                            style={{ width: "130px", height: "130px", border: "4px solid white", 
                                     borderRadius:"50%" }}
                            /> */}
                            {item.profileIcon}
                    </div>

                    <h3><b>{item.name}</b></h3>
                    <h5>{item.handlerName}</h5>
                    <div className={profileStyle.calender}><CalendarMonthIcon /><h6>joined {item.joinedDate}</h6></div>
                    <h6><b></b> Following  <b>{item.followings}</b> Followers {item.followers}</h6>
                    <CustomButton text="Edit profile"
                        style={{
                            border: "1px solid black",
                            borderRadius: "20px", width: "7rem", marginTop: "0rem",
                            marginLeft: "32rem"
                        }}
                        type="file" handleChange={editProfile}
                    />
                    
                </div> 
                </>))}
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}  >
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Tweets" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Tweets & replies" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Media" />
                            <Tab style={{
                                fontSize: "0.9rem", fontWeight: "bold",
                                cursor: " pointer"
                            }} label="Likes" />
                        </Tabs>
                    </Box>
                    <TabPanel sx={{ color: "red", }} value={value} index={0}>
                        <>
                        {activeProfile.map((item,index)=>
                        <>
                       <div className={profileStyle.main}>
                       <div className={profileStyle.navContainer}>
                         <div className={profileStyle.container1}>
                           
                           <div onClick={()=>handleProfileIcon(index,item)}>
                           {item.profileIcon}
                           </div>
                           <div className={profileStyle.name}>{item.name} </div>
                           <VerifiedIcon />
                           {item.handlerName}
                         </div>
             
                         <div className={profileStyle.more}>{item.more}</div>
                       </div>
                       <div className={profileStyle.component2} onClick={()=>handleTweet(index,item)}>
                       <div className={profileStyle.img_caption}>
                         <div className={profileStyle.caption}> {item.tweets.map((ele)=> <div> 
                            
                           <p>{ele.tweetText}</p>
                           <img src={ele.tweetPic} className={profileStyle.img}/>
                           <div className={profileStyle.icons}>
                            {item.icons1}
                            {item.icons2}
                            {item.icons3}
                            {item.icons4}
                            {item.icons5}
                            </div>
                           

                           


                         </div>
                       
                         
                         )}
                         </div>
                          
                         {/* {
                           item.tweets[0].tweetPic ?

             
                           <img
                           src={item.tweets[0].tweetPic}
                           alt="Image Here"
                           className={profileStyle.img}
                         />
                         : 
                          null
                        } */}
                         
                       </div>
                       
                     </div>
                     </div>
                  </>
                        
                        
                        )}
                        </>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Tweets & replies
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Media
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Like
                    </TabPanel>
                </Box>
                
            </section>
            <Right/>
        </div>
     
        </>  
)}

export default TweetProfile;
