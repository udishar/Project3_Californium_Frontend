import React, { useState,useEffect } from "react";
import profileStyle from "../UserProfile/userprofile.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { Avatar } from "@mui/material";
import CustomButton from "../../atoms/button/button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// import CustomInputFields from "../../atoms/InputFields/input";

function Profile() {
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
        <div className={profileStyle.container}>
            <section className={profileStyle.section}>
                <div className={profileStyle.top}>
                    <ArrowBackIcon />
                    <h3>Udisha Arrawatia</h3>
                    <h6>0 tweets</h6>
                </div>
                <div className={profileStyle.maintop}>
                </div>

                <div className={profileStyle.mainbottom}>

                    <div>
                        <img src={file} 
                            style={{ width: "130px", height: "130px", border: "4px solid white", backgroundColor: "rgb(18, 80, 48)",
                                     borderRadius:"50%" }}
                            />
                    </div>

                    <h3><b>Udisha Arrawatia</b></h3>
                    <h5>@udisha_11</h5>
                    <div className={profileStyle.calender}><CalendarMonthIcon /><h6>joined january 2023</h6></div>
                    <h6><b>186</b> Following  <b>188</b> Followers</h6>
                    <CustomButton text={"Edit profile"}
                        style={{
                            border: "1px solid black",
                            borderRadius: "20px", width: "7rem", marginTop: "0rem",
                            marginLeft: "32rem"
                        }}
                        type="file" handleChange={editProfile}
                    />
                </div>
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
        </div>
    );
};

export default Profile;
