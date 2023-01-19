import React from "react";
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

function Left() {
  let navArr = [
    {
      icon: <TwitterIcon />,
    },
    {
      icon: <HomeIcon />,
      text: "Home",
    },
    {
      icon: <TagIcon />,
      text: "Explore",
    },
    {
      icon: <NotificationsNoneIcon />,
      text: "Notifications",
    },
    {
      icon: <MailOutlineIcon />,
      text: "Messages",
    },
    {
      icon: <BookmarkBorderIcon />,
      text: "Bookmarks",
    },
    {
      icon: <ListAltIcon />,
      text: "Lists",
    },
    {
      icon: <PermIdentityIcon />,
      text: "Profile",
    },
    {
      icon: <MoreHorizIcon />,
      text: "More",
    },
  ];
  const list = navArr;

  return (
    <div className={leftStyle.mainSectionContainer}>
      <section className={leftStyle.section1}>
        {list.map((item) => (
          <div className={leftStyle.div1}>
            <div className={leftStyle.iconContainer}>
              <div className={leftStyle.icons}>{item.icon}</div>
            </div>
            <div className={leftStyle.text}>{item.text}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Left;
