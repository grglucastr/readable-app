import React, { Component } from 'react';
import {connect} from 'react-redux'
import Categories from './Categories';
import ContentList from './ContentList'

import { handleInitialData } from '../actions/shared'
import { handleLoadComments } from '../actions/comments'

class App extends Component {

  componentDidMount(){
    // handle initial data
    const postId = '8xf0y6ziyjabvozdd253nd'
    this.props.dispatch(handleInitialData())
    this.props.dispatch(handleLoadComments(postId))
  }

  render() {

    const { comments, posts } = this.props
      
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Readable App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <ContentList list={posts} title="Posts" />
          </div>
          <div className="col-sm-12 col-md-4">
            <Categories/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({comments, posts}){
   
  return {
    comments,
    posts
  }
}

export default connect(mapStateToProps)(App);
