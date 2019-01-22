import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentListItem from './ContentListItem'

class ContentList extends Component {

  state = {
    contentTitle: 'Posts'
  }

  componentDidMount(){
    if(this.props.match){
      if(this.props.match.params.category) {
        console.log('fetch by category bro, its better');   
      }
    }
    
  }

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

function mapStateToProps({posts, comments}, props){

  if(comments.length > 0) {
    return {
      list: comments,
      title: "Post comments"
    }
  }

  let customTitle = "Posts"
  let customList = posts

  if(props.match){
    if(props.match.params.category){
      const { category } = props.match.params 
      customTitle = `Posts related to: ${category}`     
    }
  }
  
  return {
    list: props.list ? props.list : customList,
    title: props.title ? props.title : customTitle
  }
}

export default connect(mapStateToProps)(ContentList)