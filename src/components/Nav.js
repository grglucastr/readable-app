import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return(
    <div>
      <Link to="/" className="nav-links">Home</Link>
      <Link to="/post" className="nav-links" > New Post</Link>

    </div>
  ) 
}