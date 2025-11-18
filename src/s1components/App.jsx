// import React from 'react'
// import Home from './Home'

// export default function App() {

//     let name = "ali ahmed"
//     let age =18
//     // Home({name:"ali ahmed" ,age :18})
//   return (
//    <>
//       <div style={{border:"2px solid green",padding:"10px"}}>
//         <h1>App Component...</h1>

//         <Home name ={name} age={age}/>
//         <Home name ={"kamran"} age={20}/>

//       </div>

//    </>
//   )
// }

// _-----------------------------_

// import React from "react";
// import Button from "./Button";
// import Form from "./Form";

// export default function App() {
//   function post_product (){
      
//   }
//   function post_blog (){

//   }
//   return (
//     <>
//       <Button
//         color={"red"}
//         backgroundColor={"#5a5a5a"}
//         content={"register"}
//       ></Button>
//       <Button
//         color={"black"}
//         backgroundColor={"red"}
//         content={"signup"}
//       ></Button>
//       <Form ph1={'enter product name'} ph2={'enter product price'} ph3={'enter product details'} content={"submit product"} sf={post_product}></Form>
//       <hr />
//       <Form ph1={'enter blog title'} ph2={'enter blog author'} ph3={'enter blog description'} content={"submit blog"} sf ={post_blog}></Form>
      
//     </>
//   );
// }

// _-----------------------------_

// import React from 'react'


// import Child from './Child'

// export default function Parent() {

//   let details = ["ali",18,"male",true]

//   return (
//     <div>
//       <Child data ={details}/>
//     </div>
//   )
// }

import React from 'react'
import Input from './Input'




export default function App() {

  

  return (
    <div>
      <Input attributes={{ type:"radio"}}/>
      <Input attributes={{ type:"submit" ,value:"register",className:"text-center text-danger",required:true}}/>
      <Input attributes={{ type:"submit" ,value:"register",className:"text-center text-danger",required:true}}/>
    </div>
  )
}

