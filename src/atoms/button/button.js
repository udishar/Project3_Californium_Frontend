import React from "react";
import buttonStyle from "../button/button.module.css";
export default function CustomButton({
  buttonText,
  text,
  texted,
  texting,
  style,
  teext,
  onClicking,
  value
}) {
  return (
    <button className={buttonStyle.btn} style={style} onClick={onClicking}>
      {buttonText}
      {text}
      {texted}
      {texting}
      {teext}
      {value}
    </button>
  );
}
