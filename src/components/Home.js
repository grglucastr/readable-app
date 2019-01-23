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
        <ContentList /> 
      </div>
    )
  }
}

export default connect()(Home);