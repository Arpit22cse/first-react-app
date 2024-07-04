import { useState } from "react";
import { useEffect } from "react";
import './index.css'
function Clock(){
  useEffect(()=>{

  },[]);
  const[time,changeTime]=useState("00:00:00");
  return<>
  <h1 className="text-green-300 text-center ">Current Time:   {time}</h1>
  </>
}
export default Clock;