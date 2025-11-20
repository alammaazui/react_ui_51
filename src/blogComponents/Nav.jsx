import React from 'react'
import { Link } from 'react-router'

export default function Nav() {
  return (
    <div style={{backgroundColor:"red" ,color:"white"}}>
        <h1>Nav</h1>
        
        <Link to="/">Home</Link>
        <Link to="/createBlog">Create Blog</Link>
        <Link to="/viewBlog">View Blog</Link>
        <Link to="/editBlog">Edit Blog</Link>
    </div>
  )
}
