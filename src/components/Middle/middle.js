import React from "react";
import CustomButton from "../../atoms/button/button";
import CustomInputFields from "../../atoms/InputFields/input";
import Card from "../Cards/card";
import middleStyle from "../Middle/middle.module.css";

const Middle = () => {
  return (
    <div className={middleStyle.container}>
      <section className={middleStyle.section}>
        <header>
          <nav className={middleStyle.nav}>
            <div className={middleStyle.home}>Home</div>
            <div className={middleStyle.forYou}>
              <div className={middleStyle.div1}> For You</div>
              <div className={middleStyle.div3}> Following</div>
            </div>
          </nav>
        </header>
        <div className={middleStyle.div2}>
          <CustomInputFields abc="What's happening?" style={{ outline:"none",padding:"2rem", width:"35rem",border:"none"}} />
          <div className={middleStyle.btn}>
          <CustomButton btnVal="Tweet" style={{ width:"6rem", borderRadius:"20px",margin:"1rem",color:"white",backgroundColor:"#007bff"}}/>
          </div>
          <Card/>
        </div>
      </section>
    </div>
  );
};

export default Middle;
