import React, { Component } from 'react'
import ContentList from './ContentList';
import SortContentList from './SortContentList';

class PostsByCategory extends Component {


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

export default PostsByCategory
