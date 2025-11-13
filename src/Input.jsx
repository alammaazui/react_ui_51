import React from 'react'

export default function Input() {

    let style = {
        display:"block",
        height:"20px",
        width:"80%",
        margin:"4px auto",
        border:"2px solid #5a5a5a"
    }

  return (
    <input style={style} type="text" placeholder='cutom input'/>
  )
}
