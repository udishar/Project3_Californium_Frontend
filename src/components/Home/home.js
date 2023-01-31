import React, { useEffect } from "react";
import Left from "../LeftSide/left";
import homeStyle from "../Home/home.module.css";
import Middle from "../Middle/middle";
import Right from "../Right/right";
import Profile from "../UserProfile/userprofile";
import { useRecoilValue } from "recoil";
import { profileAtom } from "../../atom";
import { userInfo } from "../../atom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isProfile = useRecoilValue(profileAtom);
  const isUserLoggedIn = useRecoilValue(userInfo);
  console.log(isUserLoggedIn.isUserLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn.isUserLoggedIn === false) {
      navigate("/signin");
    }
  }, [isUserLoggedIn.isUserLoggedIn]);

  return (
    <div className={homeStyle.wrapper}>
      <Left />
      {console.log("isProfileSet ", isProfile.isProfileOpen)}
      {isProfile.isProfileOpen ? <Profile /> : <Middle />}

      <Right />
    </div>
  );
}

export default Home;
