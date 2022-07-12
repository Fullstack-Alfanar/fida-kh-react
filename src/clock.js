import { useEffect, useState } from "react";

function GetTime(){
    const [clock,setTime]=useState("");
    useEffect(()=>{
        setInterval(()=>{
          let date=new Date();  
          let time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
          setTime(time);

        },1000);

    })
   


    return(
        <label>{clock}</label>
    );

}
export default GetTime;