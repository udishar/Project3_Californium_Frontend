import React,{useState} from 'react'
import CustomButton from "../../atoms/button/button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import registerStyle from '../Register/Register.module.css'
import CustomInputFields from '../../atoms/InputFields/input';

const Register = (props) => {
    const { open } = props;
    const  [instead,setinstead]=useState(true)
   

    const createDigits =()=>{
        const digits = [];
        
        for (let i=1903;i<2006; i++){
          digits.push(
            <option value={i}>{i}
            </option>
            
          ) }
        
          return digits;
      }
      const createDigitsM =()=>{
        const digitsm = [];
        
        for (let i=1;i<31; i++){
          digitsm.push(
            <option value={i}>{i}
            </option>
            
          ) }
        
          return digitsm;
      }
  return (
    <Dialog open className={registerStyle.dialog}>
    
    <DialogTitle className={registerStyle.title}>
        Create Your Account
      </DialogTitle>
      <div className={registerStyle.inputDiv}>
      <CustomInputFields abc="Enter Name " />
      <CustomInputFields abc="Password " />
      {instead===true ? <CustomInputFields type="text"  abc="Phone"/> : <CustomInputFields type="text"  abc="Email"/>}
      <p onClick={()=>{setinstead(!instead)}}>
    <u>{instead===true?<p>use email instead</p>:<p>use phone instead</p>}
    </u></p>
    </div>
    <div className={registerStyle.dob} >
    <h4>Date of Birth</h4>
    <p>This will not be shown publicly. confirm your own age, even if this account is for a bussiness, a pet, or something else.</p>
    </div>
    <div className={registerStyle.month}>
    <select name='Month'>
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
    <select name='Day'>
    <option value="Day">Day</option>
    {createDigitsM()}
    
    </select>
    <select name='Year'>
    <option value="Year">Year</option>
    {createDigits()}
    </select>
    </div>
    <div className={registerStyle.next} >
    <CustomButton value="Register"/>
    </div>

      </Dialog>
  )
}

export default Register
