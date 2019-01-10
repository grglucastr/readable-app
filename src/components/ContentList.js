import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                <li key={item.id}>
                  <ContentListItem 
                    item={item} />              
                </li>
              ))
            )
          }
        </ul>
      </div>
     )
  }
}

function mapStateToProps({posts}, props){

  let customTitle = "Posts"
  let customList = posts

  if(props.match){
    if(props.match.params.category){
      const { category } = props.match.params 
      customList = posts.filter((p) => p.category === category)
      customTitle = `Posts related to: ${category}`
    }
  }
  
  return {
    list: props.list ? props.list : customList,
    title: props.title ? props.title : customTitle
  }
}

export default connect(mapStateToProps)(ContentList)