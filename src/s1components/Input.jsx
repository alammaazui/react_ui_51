import React from 'react'

export default function Input({attributes}) {

    
    console.log(attributes)
    
  return (
    <>  
        <hr />
        <input {...attributes} />
        <hr />
    </>
  )
}

