import React from "react";
import InputStyle from "../InputFields/input.module.css";
function CustomInputFields({ abc, handleChange, type , style }) {
  return (
    <input
      type={type}
      placeholder={abc}
      className={InputStyle.text}
      style={style}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}

export default CustomInputFields;
