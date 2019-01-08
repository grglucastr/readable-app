import React, { Component } from 'react'
import ContentListItem from './ContentListItem'

class ContentList extends Component {

  render () {

    const { list, title} = this.props

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            list.map((item) => (
              <li key={item.id}>
                <ContentListItem 
                  item={item} />              
              </li>
            ))
          }
        </ul>
      </div>
     )
  }
}


export default ContentList