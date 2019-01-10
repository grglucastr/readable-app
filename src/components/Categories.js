import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Categories extends Component {

  render() {
    const {categories} = this.props

    return (
      <div>
        <h5><strong>Filter By Categories</strong></h5>
        <ul className="list-categories">
          {
            categories.map((category) => (
              <li key={category.name}>
                  <Link to={`/${category.path}/posts`}>{category.name}</Link>  
              </li>
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