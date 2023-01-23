import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import img from "../DummyProfile/image/3.jpg";
import profileStyle from "../DummyProfile/profile.module.css";
import Dialog from "@mui/material/Dialog";

const CustomProfile = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  let customProfileArr = [
    {
      image: (
        <img src={img} alt="Image here" className={profileStyle.imgStyle} />
      ),
      name: "Udisha Arrawatia",
      handlerName: "@udisha_11",
      icon: <MoreHorizIcon />,
    },
  ];
  const profile = customProfileArr;

  function handleClick() {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    } else {
      setIsDialogOpen(true);
    }
  }
  if (isDialogOpen) {
    return (
      <Dialog open={isDialogOpen}
      PaperProps={{
        style: {
          borderRadius: "20px",
          width:"25em",
          marginTop: "27em",
          marginRight:"72em",
          padding:"0.5em"
        },
      }}>
        <div className={profileStyle.headings}>
        <h4 className={profileStyle.h1}>Add an existing account</h4>
        <h4 className={profileStyle.h2}> Log out @udisha_11 </h4>
        </div>
      </Dialog>
    );
  }
  return (
    <div className={profileStyle.main} onClick={handleClick}>
      {profile.map((item) => (
        <div className={profileStyle.container}>
          <div className={profileStyle.image}>{item.image}</div>
          <div className={profileStyle.middle}>
            <div>{item.name}</div>
            <div>{item.handlerName}</div>
          </div>
          <div className={profileStyle.handleIcon}>{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomProfile;