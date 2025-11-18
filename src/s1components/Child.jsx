import React from 'react'

// -------------------V1--------------------
// export default function Child(props) {
//     console.log(props)
//   return (
//     <div>
//       <h1>name = {props.data[0]}</h1>
//       <h1>age = {props.data[1]}</h1>
//       <h1>gender = {props.data[2]}</h1>
//       <h1>status = {props.data[3]}</h1>
//     </div>
//   );
// }
// -------------------V2--------------------
// export default function Child({data}) {
    
//   return (
//     <div>
//       <h1>name = {data[0]}</h1>
//       <h1>age = {data[1]}</h1>
//       <h1>gender = {data[2]}</h1>
//       <h1>status = {data[3]}</h1>
//     </div>
//   );
// }
// -------------------V3--------------------
// export default function Child({data}) {
//     let [name,age,gender,status] = data
//   return (
//     <div>
//       <h1>name = {name}</h1>
//       <h1>age = {age}</h1>
//       <h1>gender = {gender}</h1>
//       <h1>status = {status}</h1>
//     </div>
//   );
// }
