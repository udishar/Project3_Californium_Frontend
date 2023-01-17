import React from 'react'
import InputStyle from '../InputFields/input.module.css'
function CustomInputFields({abc}) {
  return (
    <input type="text"  placeholder={abc} className={InputStyle.text}/>
      )
}

export default CustomInputFields;
