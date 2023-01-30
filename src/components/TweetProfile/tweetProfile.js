

import React, { useState,useEffect } from "react";
import profileStyle from "../TweetProfile/tweet.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Avatar } from "@mui/material";
import CustomButton from "../../atoms/button/button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { profileAtom } from "../../atom";
import { useRecoilState } from "recoil";
import {tweetData} from '../../atom';
import Left from "../LeftSide/left";
import Right from "../Right/right";
import { useNavigate, useSearchParams } from 'react-router-dom';

// import CustomInputFields from "../../atoms/InputFields/input";

function TweetProfile() {
    // const [isProfile, setIsProfile] = useRecoilState(profileAtom);
    const [ProfileList , setProfileList]=useRecoilState(tweetData)
    const [searchParams] = useSearchParams();
    const [activeProfile,setActiveProfile] =useState([])
   let navigate= useNavigate()
  
    
    useEffect(()=>{
        console.log(searchParams.get("handlerName"))
        let clickingIndex=ProfileList.filter((ele)=>ele.handlerName == searchParams.get("handlerName"))
        console.log(clickingIndex)
        setActiveProfile(clickingIndex)
    },[])

function handleArrow(){
    
    navigate('/')
    
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
        console.log("clickimg")
        setFile(URL.createObjectURL(e.target.files[0]));
    }useEffect(()=>{},[])

    return (

      <>
     

        <div className={profileStyle.container}>
        <Left/>
            
            <section className={profileStyle.section}>
            {activeProfile.map((item,index)=>(
                <>
                {console.log(item,"from tweet")}
                <div className={profileStyle.top}>
                   
                    <div onClick={handleArrow}><ArrowBackIcon /></div>
                    
                    <h3>{item.name}</h3>
                    <h6>{item.tweets[0].tweetCount}</h6>
                </div>
                 <div className={profileStyle.maintop}></div>

                <div className={profileStyle.mainbottom}>

                    <div className={profileStyle.img}>
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
                        Tweets
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
