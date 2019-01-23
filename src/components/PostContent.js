import React from 'react'
import ContentRate from './ContentRate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { formatFullDate } from '../util/helpers'

export default function PostContent({post, onDeletePost}) {
  return(
    <div>
      <div className="row">
        <div className="col-sm-10">
          <h4> { post.title } </h4>
          
          <p>
            Author: <strong> { post.author} </strong> <br />
            Posted on: <strong> { formatFullDate(post.timestamp) } </strong>
          </p>
          
          <div>
            
            <Link to={`/post/${post.id}`} className="btn btn-info" title="Edit this post" >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Link>

            &nbsp;
            <button 
              className="btn btn-danger" 
              title="Delete this post" 
              onClick={() => onDeletePost()}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
          
          <hr/>
          <div>{ post.body }</div>
        </div>
        
        <div className="col-sm-2">
          <ContentRate item={post} />
        </div>

      </div>
    </div>
  )
}