import React, { useEffect, useState } from "react";

export default function C1() {


  const [counter,setCounter] = useState(0) 
  const [recallAPI, setrecall] = useState(true); 
  const [productAPI, setproduct] = useState(true); 
  
  useEffect(function(){
    console.log("calling server API 1");
    setTimeout(()=>{
      console.log("timer started")
    },1000)
  } ,[recallAPI] )
  
  useEffect(()=>{
    
    console.log("calling server API 2");
  },
  [productAPI])
  // console.log("statement 2")
  console.log("c1 is rendered.");

  return (
    <div style={{border:"2px solid red"}}>
      <h1>C1</h1>
      <h2>{counter}</h2>
      <button onClick={()=>{setCounter((counter)=> counter +1)}}>inc</button>
      <button onClick={()=>{setrecall(val => !val)}}>Refresh</button>
    </div>
  );
}
