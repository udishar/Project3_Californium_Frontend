import React, { useState } from "react";
import CustomButton from "../button/button";
import Avatar from "@mui/material/Avatar";
import followStyle from "../Follow/follow.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function FollowList() {
  const [followBtn, setFollowBtn] = useState("Follow");

  function handleClicked() {
    if (followBtn == "Follow") {
      setFollowBtn("Following");
    }
    if (followBtn == "Following") {
      setFollowBtn("Follow");
    }
  }

  let list = [
    {
      image: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
      name: "Remy Sharp",
      handlerName: "@RemySharp",
      button: (
        <CustomButton
          followBtn={followBtn}
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClicking={handleClicked}
        />
      ),
    },
    {
      image: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
      name: "Travis Howard",
      handlerName: "@TravisHoward",
      button: (
        <CustomButton
          followBtn={followBtn}
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClicking={handleClicked}
        />
      ),
    },
    {
      image: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
      name: "Cindy Baker",
      handlerName: "@CindyBaker",
      button: (
        <CustomButton
          followBtn={followBtn}
          style={{
            color: "white",
            backgroundColor: "black",
            width: "5rem",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClicking={handleClicked}
        />
      ),
    },
  ];
  let listArr = list;

  return (
    <div className={followStyle.Main}>
      {listArr.map((items) => (
        <div className={followStyle.container}>
          <div className={followStyle.container2}>
            <div className={followStyle.image}>{items.image}</div>
            <div className={followStyle.middle}>
              <div>
                {items.name}
                <VerifiedIcon />
              </div>
              <div className={followStyle.handlername}>{items.handlerName}</div>
            </div>
          </div>
          <div className={followStyle.btn} >{items.button}</div>
        </div>
      ))}
    </div>
  );
}
