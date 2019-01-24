import React from 'react'
import { connect } from 'react-redux'
import {
  listPostsNewest, 
  listPostsOldest, 
  listPostHigherVotes, 
  listPostLowerVotes} from '../actions/posts'


class SortContentList extends React.Component {

  sortListContent = (e) => {

    switch(e.target.value){
      case 'newest':
        this.props.dispatch(listPostsNewest(this.props.posts))
      break
  
      case 'oldest':
        this.props.dispatch(listPostsOldest(this.props.posts))
      break
  
      case 'higher_votes':
        this.props.dispatch(listPostHigherVotes(this.props.posts))
      break
  
      case 'lower_votes':
        this.props.dispatch(listPostLowerVotes(this.props.posts))
      break
  
      default:
        this.props.dispatch(listPostsNewest(this.props.posts))
      break
  
    }  
  }

  render() {
    return (
      <div>
        Sort:
        <select style={{marginLeft: '5px'}} onChange={(e) => this.sortListContent(e)}>
          <option value="newest">Newest</option>
          <option value="oldest" >Oldest</option>
          <option value="higher_votes" >Higher voted</option>
          <option value="lower_votes">Lower voted</option>
        </select>
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return { posts }
}

export default connect(mapStateToProps)(SortContentList) 