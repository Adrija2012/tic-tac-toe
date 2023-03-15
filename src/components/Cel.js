//import React from "react";
import "./cel.css"
export default function Cel({text, indexOfcel, changeIndexOfcel})
{
var classHolder= "anotherButton"
if(text=="X")
{
classHolder="Xbutton"
}
 else if(text=="O")
 {
    classHolder="Obutton"
 }
return(
<button className={classHolder} onClick={()=>changeIndexOfcel(indexOfcel)}>
{text}
</button>
    )
}