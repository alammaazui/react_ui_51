import React, { useState } from 'react'

export default function App() {

    // let number = 0

    // let details = ["ali",function(){}]

    // console.log(details[0])
    // console.log(details[1]())

    // let [item1,item2] = details

    // console.log("check use state return value :",useState(0))

    let [number ,setNumber] = useState(0)
    
    function inc_number (){

        // number = number + 1

        // console.log("number :" , number)
        number = number + 1
        
        setNumber(number)

    }

  return (
    <div>
        <h1>number :  {number}</h1>
        <button onClick={()=>{inc_number()}} >Increment</button>
    </div>
  )
}
