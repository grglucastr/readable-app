import React from 'react'
import { Redirect } from 'react-router-dom'
import PostContent from './PostContent'
import PostNewComment from './PostNewComment'
import ContentList from './ContentList'
import { handleLoadComments, clearCommentList } from '../actions/comments'

import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/posts';

class PostContainer extends React.Component {

  componentDidMount(){
    const {id: postId} = this.props.match.params
    this.props.dispatch(handleLoadComments(postId))
  }

  componentWillUnmount(){
    this.props.dispatch(clearCommentList())
  }

  handlePostDelete({ id }) {
    const sureDelete = window.confirm("Are you sure you want to delete?")
    if(sureDelete){
      this.props.dispatch(handleDeletePost(id))
    }
  }

  render(){
    const { post, comments } = this.props

    if(post.deleted){
      alert('Post deleted!')
      return <Redirect to="/" />
    }

    return (
      <div>
        <div>
          <PostContent post={post} onDeletePost={()=> this.handlePostDelete(post)} />
        </div>

        <div>
          <hr/>
        </div>

        <div style={{marginTop: '20px', padding:'10px', background:'#ccc'}}>
          { comments.length > 0 && ( <ContentList  /> ) }
        </div>

        <div style={{marginTop: '20px', padding:'10px', background:'#ccc'}}>
          <PostNewComment post={post} comments={comments} />
        </div>

        
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, props){
  const { id } = props.match.params
  const post = posts.filter((post) => post.id === id) 

  return{
    post: post.length > 0 ? post[0] : {},
    comments
  }
}

export default connect(mapStateToProps)(PostContainer)