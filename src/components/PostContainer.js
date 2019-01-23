import React from 'react'
import { Redirect } from 'react-router-dom'
import PostContent from './PostContent'
import PostNewComment from './PostNewComment'
import ContentList from './ContentList'
import { handleLoadComments, clearCommentList } from '../actions/comments'

import { connect } from 'react-redux'
import { handleDeletePost, handleGetPostById } from '../actions/posts';

class PostContainer extends React.Component {

  componentDidMount(){
    const {id: postId} = this.props.match.params
    this.props.dispatch(handleLoadComments(postId))
    this.props.dispatch(handleGetPostById(postId))
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

        { 
          comments.length > 0 && 
          (
            <div style={{marginTop: '20px', padding:'10px', background:'#ccc'}}>
              <ContentList title="Comments" list={comments}  />
            </div>
          )
        }

        <div style={{marginTop: '20px', padding:'10px', background:'#ccc'}}>
          <PostNewComment post={post} comments={comments} />
        </div>        
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }){
 
  return{
    post: posts.length > 0 ? posts[0] : {},
    comments
  }
}

export default connect(mapStateToProps)(PostContainer)