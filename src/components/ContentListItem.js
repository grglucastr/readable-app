import React from 'react'
import { Link } from 'react-router-dom'

export default function ContentListItem({item}){
  const {body} = item;
  const preview = item.body.substring(0, 80)

  return (
    <div>
      {
        item.title ? 
        <h4> <Link to={`/posts/${item.id}`}>{item.title}</Link> </h4> : 
        <h4>{item.author}</h4>
      }

      {
        item.title 
        ?
        
        <p className="text-normal">
          {preview} 
          {body.length > 80 && ("[...]")}
        </p> 

        :
        
        <p className="text-normal">{item.body}</p> 
      }
      
    </div>
  )
}