import React from 'react'
import { Link } from 'react-router-dom'

import App from './App'
import PostForm from './PostForm'

export default function Nav () {
  return(
    <div>
      <Link to="/" >Home</Link>
      <Link to="/post" > New Post</Link>

    </div>
  ) 
}