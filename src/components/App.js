import React, { Component } from 'react';
import {connect} from 'react-redux'
import Categories from './Categories';

import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount(){
    // handle initial data
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Readable App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8">

          </div>
          <div className="col-sm-12 col-md-4">
            <Categories/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
