import React, { useState } from 'react'

export default function C2() {
    console.log("c2 is rendered.");
    const [name ,setName ] = useState("ali")
    const [age ,setAge ] = useState(18)


  return (
    <div style={{ border: "2px solid green" }}>
      <h1>C2</h1>
      <h2>name : {name}</h2>
      <button onClick={()=>{setName("ali ahmed")}}>change name</button>
      <h2>age : {age}</h2>
      <button onClick={()=>{setAge(19)}}>change age</button>
    </div>
  );
}
