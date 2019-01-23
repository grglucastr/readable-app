import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentList from './ContentList'
import SortContentList from './SortContentList'
import {handleListPosts} from '../actions/posts'

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(handleListPosts())
  }

  render() {
    return ( 
      <div>
        <div className="text-right">
          <SortContentList />
        </div>
        <ContentList title="Posts" list={this.props.posts} /> 
      </div>
    )
  }
}

function mapStateToProps({posts}){
  return {
    posts
  }
}

export default connect(mapStateToProps)(Home);