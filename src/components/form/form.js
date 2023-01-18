import React ,{useState}from "react";
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomInputFields from "../../atoms/InputFields/input";
import FormStyle from "../form/form.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { isValidEmail,isValidPass } from "../../Helper/validtion";
import { useRecoilState } from "recoil";
import {userInfo} from '../../atom'


export default function Form(props) {
  const { open } = props;
  const placeholderEmail="Enter Email Here..."
  const placeholderPass="Enter Password Here.."

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loggedIn,setLoggedIn] = useRecoilState(userInfo)
  
  function handleEmail(inputEmail){
    setEmail(inputEmail)
      }
function handlePassword(inputPass){
  setPassword(inputPass)
  
}
const userData= JSON.parse(localStorage.getItem("userData")) || []
function handleSubmit(){
 userData.push({
  email:email,
  password:password,
  isUserLoggedIn:loggedIn.isUserLoggedIn
  })
  const isEmailValid=isValidEmail(email)
  const isPasswordValid = isValidPass(password)
  if(isEmailValid == "Valid Email" && isPasswordValid == "Valid Password"){
    localStorage.setItem('userData', JSON.stringify(userData))
    setLoggedIn({...loggedIn,isUserLoggedIn:true})
    alert ("you are successfully logged in")
    }

    else if(isEmailValid=="Invalid email" || isPasswordValid=="Invalid Password"){
      alert("Invalid Details")
    }
    else{
      alert("Enter details properly")
    }
    setEmail("")
    setPassword("")
 
  
  
  console.log(isEmailValid,isPasswordValid)
}

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
        <div className={FormStyle.in}>

        <CustomInputFields abc={placeholderEmail} handleChange={handleEmail} type="text" />
        <CustomInputFields abc={placeholderPass} handleChange={handlePassword} type="password" />
        
        </div>
        <div className={FormStyle.btn3}>
        <CustomButton
          texted="Submit"
          style={{ backgroundColor: "black", color: "white" }}
          onClicking={handleSubmit}
          
         
        />
        </div>
        <div className={FormStyle.btn4}>
        <CustomButton texting="Forgot password?" />
        </div>
        <div className={FormStyle.login}>
        <p>Don't have an account?</p>
        <Link to="/signup" className={FormStyle.link}> Sign up</Link>
        </div>

      </div>
     
    </Dialog>
  );
}
