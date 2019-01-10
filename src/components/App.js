import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {connect} from 'react-redux'
import Categories from './Categories';
import ContentList from './ContentList'
import PostContainer from './PostContainer'
import Nav from './Nav'

import { handleInitialData } from '../actions/shared'
import PostForm from './PostForm';

class App extends Component {

  componentDidMount(){
    // handle initial data
    this.props.dispatch(handleInitialData())
  }

  render() {

    const { posts } = this.props
      
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/">
                <h1>Readable App</h1>
              </Link>
              
            </div>
            <div className="col">
              <Nav />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8">
                <Route exact path='/' render={() => (
                  <ContentList 
                    title="Posts"
                    list={posts} />
                  )} 
                />
                <Route path='/posts/:id' component={PostContainer} />
                <Route path='/post' component={PostForm} />

            </div>
            <div className="col-sm-12 col-md-4">
              <Categories/>
            </div>
          </div>
        </div>
        
      </Router>
    );
  }
}

function mapStateToProps({posts}){
   
  return {
    posts
  }
}

export default connect(mapStateToProps)(App);
