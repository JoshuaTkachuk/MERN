import React from "react";
import { useParams } from "react-router-dom";

const Input = (props) =>{
    const {input, textColor, backColor} = useParams();
    const getMessage = (input) =>{
        if(isNaN(input)){
            return <h1 style={{color: textColor , backgroundColor: backColor}}>the Word is: {input}</h1>
        }
        else{
            return <h1 style={{color: textColor , backgroundColor: backColor}}>The number is: {input}</h1>
        }
    }
    return<div>
        {getMessage(input)}
    </div>
} 
export default Input;