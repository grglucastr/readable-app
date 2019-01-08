import React from 'react'

export default function PostContent({post}) {
  return(
    <div>
      <h4> { post.title } </h4>
      <p>
        Author: <strong> { post.author} </strong> <br />
        Posted on: <strong> { post.timestamp } </strong>
      </p>

      <hr/>

      <div>{ post.body }</div>
      
    </div>
  )
}