import React from 'react'
import PostContent from './PostContent'

import { connect } from 'react-redux'

class PostContainer extends React.Component {

  render(){
    const { post } = this.props


    return (
      <div>
        
        <div className="text-right">
          buttons goes here 
        </div>

        <div>
          <PostContent post={post}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts}, props){
  const { id } = props.match.params
  const post = posts.filter((post) => post.id === id);  
  return{
    post: post.length > 0 ? post[0] : {}
  }
}

export default connect(mapStateToProps)(PostContainer)