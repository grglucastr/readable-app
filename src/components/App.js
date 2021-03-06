import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'

import Categories from './Categories';
import PostsByCategory from './PostsByCategory';
import Home from './Home';
import Nav from './Nav'
import PostContainer from './PostContainer'


import { handleInitialData } from '../actions/shared'
import PostForm from './PostForm';

import '../styles.css';


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())    
  }

  render() {    
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/" style={{textDecoration:'none'}}>
                <h1>Readable App</h1>
              </Link>
              
            </div>
            <div className="col text-right">
              <Nav />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <hr/>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-8">
                <Route exact path='/' component={Home} />
                <Route path='/:category/posts' component={PostsByCategory} />
                <Route path='/posts/:id' component={PostContainer} />
                <Route path='/post/:id?' component={PostForm} />
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
export default connect()(App);
