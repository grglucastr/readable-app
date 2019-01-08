import React from 'react'
import PostContent from './PostContent'
import ContentList from './ContentList'

import { connect } from 'react-redux'

class PostContainer extends React.Component {

  render(){
    const { post, comments } = this.props


    return (
      <div>
        
        <div className="text-right">
          buttons goes here 
        </div>

        <div>
          <PostContent post={post}/>
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
  const postComments = comments.filter(comment => comment.parentId === id)

  return{
    post: post.length > 0 ? post[0] : {},
    comments: postComments
  }
}

export default connect(mapStateToProps)(PostContainer)