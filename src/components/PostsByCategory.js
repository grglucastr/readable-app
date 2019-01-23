import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentList from './ContentList';
import SortContentList from './SortContentList';

class PostsByCategory extends Component {
  render() {
    return (
      <div>

        <div className="text-right">
          <SortContentList />
        </div>

        <ContentList title={this.props.title} list={this.props.posts}  />
      </div>
    )
  }
}

function mapStateToProps({posts}, props){

  const { category } = props.match.params
  const title  = `Posts Related to "${category}"`

  return {
    posts,
    title
  }
}

export default connect(mapStateToProps)(PostsByCategory)
