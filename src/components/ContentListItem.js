import React from 'react'
import { Link } from 'react-router-dom'
import ContentRate from './ContentRate'

import { formatSimpleDate } from '../util/helpers'

export default function ContentListItem({item}){
  const {body} = item;
  const preview = item.body.substring(0, 80)

  return (
    <div>
      <div className="row">
        <div className="col-sm-10">
          {
            item.parentId ? 
            <h4>{item.author}</h4>:
            <h4> <Link to={`/posts/${item.id}`}>{item.title}</Link> </h4> 
          }

          {
            item.parentId  
            ?
            
            <p className="text-normal">{item.body}</p>
            
            :
            
            <div>
              <p className="date-posted">Posted Date: { formatSimpleDate(item.timestamp) }</p>
              <p className="text-normal">
                {preview} 
                {body.length > 80 && ("[...]")}
              </p>
            </div>
          }
        </div>

        <div className="col-sm-2">
          <ContentRate item={item} />

        </div>
      </div>
    </div>
  )
}