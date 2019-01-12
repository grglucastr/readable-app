import React from 'react'
import PostContent from './PostContent'
import PostNewComment from './PostNewComment'
import ContentList from './ContentList'
import { handleLoadComments } from '../actions/comments'

import { connect } from 'react-redux'

class PostContainer extends React.Component {

  componentDidMount(){
    const {id: postId} = this.props.match.params
    this.props.dispatch(handleLoadComments(postId))
    
  }

  render(){
    const { post, comments } = this.props


    return (
      <div>
        
        <div>
          <PostContent post={post}/>
          asdfas
        </div>

        <div style={{marginTop: '20px'}}>
          <PostNewComment post={post} />
        </div>



        <div style={{marginTop: '20px'}}>
          {
            comments.length > 0 && (<ContentList  list={this.props.comments}  title="Comments" />)
          }
          
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, comments }, props){

  const { id } = props.match.params
  const post = posts.filter((post) => post.id === id)

  console.log('commentes', comments);
  
  

  return{
    post: post.length > 0 ? post[0] : {},
    comments
  }
}

export default connect(mapStateToProps)(PostContainer)