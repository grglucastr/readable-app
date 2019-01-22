import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentListItem from './ContentListItem'

class ContentList extends Component {
 
  render () {
    const { list, title} = this.props

    console.log('list', list);
    

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

function mapStateToProps({posts, comments}, props){

  if(comments.length > 0) {
    return {
      list: comments,
      title: "Comments"
    }
  }

  let customTitle = "Posts"
  let customList = posts
  
  return {
    list: props.list ? props.list : customList,
    title: props.title ? props.title : customTitle
  }
}

export default connect(mapStateToProps)(ContentList)