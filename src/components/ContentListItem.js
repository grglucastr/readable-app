import React from 'react'

export default function ContentListItem({item}){
  return (
    <div>
      {
        item.title ? 
        <h4>{item.title}</h4> : 
        <h4>{item.author}</h4>
      }
      <p>{item.body}</p>
    </div>
  )
}