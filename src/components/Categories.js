import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleListPostsCategory } from '../actions/posts'

class Categories extends Component {

  render() {
    const {categories} = this.props

    return (
      <div>
        <h5><strong>Filter By Categories</strong></h5>
        <ul className="list-containers">
          {
            categories.map((category) => (
              <Link to={`/${category.path}/posts`} key={category.name} onClick={() => this.props.onCategoryClick(category.name)}>
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

function mapDispatchToProps(dispatch){
  return {
    onCategoryClick: (category) => {
      dispatch(handleListPostsCategory(category))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)