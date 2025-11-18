import React from 'react'

export default function Button({color,backgroundColor,width="500px",content,height="40px"}) {
    

    
    return (
    <button style={{color,backgroundColor,width,height}}>
        {content}
    </button>
  )
}
