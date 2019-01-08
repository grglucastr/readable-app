import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentListItem({item}){
  return (
    <div>
      {
        item.title ? 
        <h4> <Link to={`/posts/${item.id}`}>{item.title}</Link> </h4> : 
        <h4>{item.author}</h4>
      }
      <p>{item.body}</p>
    </div>
  )
}