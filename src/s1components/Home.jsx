import React from 'react'
import Card from './Card'
// export default function Home(props) {
//   return (
//     <div style={{border:"2px solid black"}}>
//         <h1>{props.name}</h1>
//         <h1>{props.age}</h1>
//         <Card/>
//     </div>
//   )
// }
export default function Home({name,age}) {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Home Component...</h1>

      <h1>{name}</h1>
      <h1>{age}</h1>
      <Card />
    </div>
  );
}
