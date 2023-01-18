import React, { useState } from "react";
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import registerStyle from "../Register/Register.module.css";
import CustomInputFields from "../../atoms/InputFields/input";
import {
  isValidEmail,
  isValidPass,
  isValidPhone,
  usernameValidation,
} from "../../Helper/validtion";
import { useRecoilState } from "recoil";
import { userInfo } from "../../atom";

const Register = (props) => {
  const { open } = props;
  const [instead, setinstead] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useRecoilState(userInfo);
  function handleEmail(inputEmail) {
    setEmail(inputEmail);
  }
  function handlePassword(inputPass) {
    setPassword(inputPass);
  }
  function handlePhone(inputPhone) {
    setPhone(inputPhone);
  }
  function handleUsername(inputUsername) {
    setUsername(inputUsername);
  }
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  function handleSubmit() {
    userData.push({
      email: email,
      password: password,
      phoneNumber: phone,
      username: username,
      isUserLoggedIn: loggedIn.isUserLoggedIn,
    });
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPass(password);
    const isUsernameValid = usernameValidation(username);
    const isPhoneNumberValid = isValidPhone(phone);

    if (
      isUsernameValid == "Valid Username" &&
      isPasswordValid == "Valid Password" &&
      (isPhoneNumberValid == "Valid Phone number" ||
        isEmailValid == "Valid Email")
    ) {
      localStorage.setItem("userData", JSON.stringify(userData));
      setLoggedIn({ ...loggedIn, isUserLoggedIn: true });
      alert("you are successfully logged in");
      console.log(
        isEmailValid,
        isPasswordValid,
        isUsernameValid,
        isPhoneNumberValid
      );
    } else if (
      
      isPasswordValid == "Invalid Password" ||
      isUsernameValid == "Invalid Username" ||
      (isPhoneNumberValid == "Invalid Phone number "&&
      isEmailValid == "Invalid email" )
    ) {
      alert("Invalid Details");
      console.log(
        isEmailValid,
        isPasswordValid,
        isUsernameValid,
        isPhoneNumberValid
      );
    } else {
      alert("Enter details properly");
      console.log(
        isEmailValid,
        isPasswordValid,
        isUsernameValid,
        isPhoneNumberValid
      );
    }
  }
  const createDigits = () => {
    const digits = [];

    for (let i = 1903; i < 2006; i++) {
      digits.push(<option value={i}>{i}</option>);
    }

    return digits;
  };
  const createDigitsM = () => {
    const digitsm = [];

    for (let i = 1; i < 31; i++) {
      digitsm.push(<option value={i}>{i}</option>);
    }

    return digitsm;
  };
  return (
    <Dialog open className={registerStyle.dialog}>
      <DialogTitle className={registerStyle.title}>
        Create Your Account
      </DialogTitle>
      <div className={registerStyle.inputDiv}>
        <CustomInputFields abc="Enter Username " handleChange={handleUsername} type="text"/>
        <CustomInputFields
          abc="Password "
          handleChange={handlePassword}
          type="password"
        />
        {instead === true ? (
          <CustomInputFields
            type="phonenumber"
            abc="Phone"
            handleChange={handlePhone}
          />
        ) : (
          <CustomInputFields
            type="text"
            abc="Email"
            handleChange={handleEmail}
          />
        )}
        <p
          onClick={() => {
            setinstead(!instead);
          }}
        >
          <u>
            {instead === true ? (
              <p>use email instead</p>
            ) : (
              <p>use phone instead</p>
            )}
          </u>
        </p>
      </div>
      <div className={registerStyle.dob}>
        <h4>Date of Birth</h4>
        <p>
          This will not be shown publicly. confirm your own age, even if this
          account is for a bussiness, a pet, or something else.
        </p>
      </div>
      <div className={registerStyle.month}>
        <select name="Month">
          <option value="Month">Month</option>
          <option value="January">January</option>
          <option value="february">february</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="Septmber">Septmber</option>
          <option value="October">October</option>
          <option value="Navember">Navember</option>
          <option value="December">December</option>
        </select>
        <select name="Day">
          <option value="Day">Day</option>
          {createDigitsM()}
        </select>
        <select name="Year">
          <option value="Year">Year</option>
          {createDigits()}
        </select>
      </div>
      <div className={registerStyle.next}>
        <CustomButton value="Register" onClicking={handleSubmit} />
      </div>
    </Dialog>
  );
};

export default Register;
