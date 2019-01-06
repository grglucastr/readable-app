import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {

  render() {
    const {categories} = this.props

    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {
            categories.map((category) => (
              <li key={category.name}>{category.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({categories}){  
  return {
    categories
  }
}

export default connect(mapStateToProps)(Categories)