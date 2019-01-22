import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentList from './ContentList'
import {handleListPosts} from '../actions/posts'

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(handleListPosts())
  }

  render() {
    return ( <ContentList /> )
  }
}

export default connect()(Home);