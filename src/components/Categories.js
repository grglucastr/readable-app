import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Categories extends Component {

  render() {
    const {categories} = this.props

    return (
      <div>
        <h5><strong>Filter By Categories</strong></h5>
        <ul className="list-containers">
          {
            categories.map((category) => (
              <Link to={`/${category.path}/posts`} key={category.name}>
                <li>
                    {category.name}
                </li>
              </Link>
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