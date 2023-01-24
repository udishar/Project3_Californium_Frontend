import React, { useState } from "react";
import leftStyle from "../LeftSide/left.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomButton from "../../atoms/button/button";
import Dialog from "@mui/material/Dialog";
import CustomProfile from "../../atoms/DummyProfile/profile";
import CustomInputFields from "../../atoms/InputFields/input";
import Avatar from "@mui/material/Avatar";
import { tweetData } from "../../atom";
import { useRecoilState } from "recoil";
import { profileAtom } from "../../atom";

function Left() {
  const [isopen, setIsOpen] = useState(false);
  const [isProfile, setIsProfile] = useRecoilState(profileAtom);

  const [newTweetText, setNewTweetText] = useRecoilState(tweetData);
  const [input, setInput] = useState("");
  console.log(newTweetText);

  function handleNewTweet(inputTweet) {
    setInput(inputTweet);
    console.log(inputTweet);
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
    };

    setNewTweetText([newTweet, ...newTweetText]);
  }
  function handleClose() {
    setIsOpen(false);
  }
  const [list, setList] = useState([
    {
      icon: <HomeIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Home",
    },
    {
      icon: <TagIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Explore",
    },
    {
      icon: (
        <NotificationsNoneIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
      ),
      text: "Notifications",
    },
    {
      icon: <MailOutlineIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Messages",
    },
    {
      icon: (
        <BookmarkBorderIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
      ),
      text: "Bookmarks",
    },
    {
      icon: <ListAltIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Lists",
    },
    {
      icon: <PermIdentityIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "Profile",
    },
    {
      icon: <MoreHorizIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />,
      text: "More",
    },
  ]);

  function handleProfile(index) {
    setIsProfile({ ...isProfile, isProfileOpen: true });
  }

  function handleTweet() {
    setIsOpen(true);
  }

  return (
    <>
      {isopen ? (
        <Dialog
          open={isopen}
          PaperProps={{
            style: {
              borderRadius: "20px",
              marginBottom: "25em",
            },
          }}
        >
          <div className={leftStyle.dailogTweet}>
            <CustomInputFields
              abc="Whats's happening?"
              style={{ padding: "5rem", border: "none", outline: "none" }}
              handleChange={handleNewTweet}
              value={input}
            />
            <div className={leftStyle.btn}>
              <CustomButton
                btnValue="Tweet"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  backgroundColor: "#00acee",
                  width: "fit-content",
                  borderRadius: "30px",
                  color: "white",
                }}
                onClicking={handleClick}
              />
            </div>
            <div className={leftStyle.close}>
              <CustomButton
                btnValue="close"
                onClicking={handleClose}
                style={{ fontSize: "1rem", fontWeight: "700" }}
              />
            </div>
          </div>
        </Dialog>
      ) : (
        ""
      )}

      <div className={leftStyle.mainSectionContainer}>
        <section className={leftStyle.section1}>
          <div className={leftStyle.twitterIcon}>
            <TwitterIcon sx={{ fontWeight: "700px", fontSize: "2rem" }} />
          </div>

          {list.map((ele, index) => (
            <div
              className={leftStyle.div1}
              onClick={() => handleProfile(index)}
            >
              <div className={leftStyle.iconContainer}>
                <div className={leftStyle.icons}>{ele.icon}</div>
              </div>
              <div className={leftStyle.text}>{ele.text}</div>
            </div>
          ))}
          <div className={leftStyle.btnTweet}>
            <CustomButton
              btnTitle="Tweet"
              onClicking={handleTweet}
              style={{
                backgroundColor: "#00acee",
                borderRadius: "40px",
                width: "14rem",
                textAlign: "center",
                hover: "#008abe",
                color: "white",
                padding: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <div className={leftStyle.profile}>
          <CustomProfile />
        </div>
      </div>
    </>
  );
}

export default Left;
