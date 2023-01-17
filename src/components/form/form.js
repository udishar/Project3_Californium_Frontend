import React from "react";
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomInputFields from "../../atoms/InputFields/input";
import FormStyle from "../form/form.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function Form(props) {
  const { open } = props;

  return (
    <Dialog open className={FormStyle.dialog}>
      <div className={FormStyle.icon}>
        <TwitterIcon className={FormStyle.image} />
      </div>

      <div className={FormStyle.container}>
        <DialogTitle className={FormStyle.title}>
          Sign in to Twitter
        </DialogTitle>
        <div className={FormStyle.btn1}>
          <GoogleIcon />

          <CustomButton buttonText="Sign in with Google" />
        </div>

        <div className={FormStyle.btn2}>
          <AppleIcon />
          <CustomButton text="Sign in with Apple" />
        </div>

        <h5 className={FormStyle.heading1}>or</h5>
        
        <CustomInputFields abc="phone,email address,or username" />
        <CustomButton
          texted="Next"
          style={{ backgroundColor: "black", color: "white" }}
        />
        <CustomButton texting="Forgot Password?" />
      </div>
    </Dialog>
  );
}
