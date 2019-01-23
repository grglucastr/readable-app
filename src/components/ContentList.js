import React, { Component } from 'react'
import ContentListItem from './ContentListItem'

class ContentList extends Component {
 
  render () {
    const { list, title} = this.props

    return (
      <div>
        <h5><strong>{title}</strong></h5>
        <ul className="list-containers">
          {
            (list.length === 0) ?
            (<p>No content found...</p>) :
            (
              list.map((item) => (
                <li key={item.id} style={{background: "#f2f2f2"}}>
                  <ContentListItem item={item} />              
                </li>
              ))
            )
          }
        </ul>
      </div>
     )
  }
}

export default ContentList