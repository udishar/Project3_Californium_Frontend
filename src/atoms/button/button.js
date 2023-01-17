import React from 'react';
import buttonStyle from '../button/button.module.css'
export default function CustomButton({buttonText,text,texted,texting,style}){
    return(
        <button className={buttonStyle.btn } style={style} >
           
            {buttonText}
            {text}
            {texted}
            {texting}
        </button>
    )
}