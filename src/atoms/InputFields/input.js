import React from 'react'
import InputStyle from '../InputFields/input.module.css'
function CustomInputFields({abc ,  handleChange , type}) {
  return (
    
    <input type={type}  placeholder={abc} className={InputStyle.text} onChange={(e)=>handleChange(e.target.value)}/>
   
      )
}

export default CustomInputFields;
