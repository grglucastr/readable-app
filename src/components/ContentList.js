import React, { Component } from 'react'


class ContentList extends Component {

  render () {

    const { list, title } = this.props

    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {
            list.map((item) => (
              <li key={item.id}>
                {item.title ? <h4>{item.title}</h4> : ''}
                <p>{item.body}</p>
              </li>
            ))
          }
          
        </ul>
      </div>
     )
  }
}


export default ContentList