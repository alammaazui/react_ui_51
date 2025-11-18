import React from 'react'
import Child from './Child';
import Test from './Test';

export default function Parent() {

  // let name = "ali"
  // let age = 18
  // let status = "false"
  // let courses = ['html','css','js']
  // let modules = {m1:"a",m2:"b",m3:"c"}

  let testFunc = ()=>{
    console.log("welcome...")
  }
  return (
    <div>
      <h1>------Parent Component------</h1>
      {/* <Child data={name}/>
      <Child data={age}/>
      <Child data={status}/>
      <Child data={courses}/> */}
      {/* <Child data={modules}/> */}
      {/* <Child /> */}
      {/* <Child data={ testFunc} /> */}
      <Test/>
    </div>
  );
}


// export default function Parent() {

//   // if (false){
//   //   console.log("if executed")
//   // }
//   // else{
    
//   //   console.log("else executed")
//   // }

//   // true ? console.log("if executed") : console.log("else executed");

//   // "a"!= "b" ? console.log("if executed") : console.log("else executed");
//   return (
//     <div>Parent</div>
//   )
// }

