import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import { handleAddPost } from '../actions/posts';

class PostForm extends Component {

  state = {
    post: {
      id: uuidv4(),
      timestamp: new Date().getTime(),
      title:'',
      author: '',
      category:'',
      body: '',
    },
    toHome:false
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      ...prevState,
      post: {
        ...prevState.post,
        [name]: value
      }
    }))
  }

  handleFormSubmit = (e) => {
    e.preventDefault()    
  
    if(this.state.post.category === ""){
      return alert("Please, choose a valid category.")
    }

    this.props.dispatch(handleAddPost(this.state.post))
    this.setState({toHome: true})

    this.cleanFields()
  }


  cleanFields = () => {
    this.setState({post: {
      title:'',
      author: '',
      category:'',
      body: '',
    }})
  }

  render() {

    const { categories } = this.props

    if(this.state.toHome === true){
      return (
        <Redirect to="/" />
      )
    }
    return ( 
      <div>
        <h5><strong>Post Form</strong></h5>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          
          <div className="form-group">
            <input 
              type="text"
              name="title"
              className="form-control"
              placeholder="Post Title"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.post.title}
              />
          </div>

          <div className="form-group">
            <input 
              type="text"
              name="author"
              className="form-control"
              placeholder="Post Author"
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.post.author}
              />
          </div>

          <div className="form-group">
            <label>
              <strong>Select Post Category:</strong>
            </label>
            <select 
              className="form-control combo-categories"
              name="category"
              value={this.state.post.category}
              onChange={(e) => this.handleInputChange(e)}>
                <option value="">Choose Post Category</option>
                {
                  categories.map((category) => (
                    <option value={category.path} key={category.path}>
                        {category.name}
                    </option>
                  ))
                }
            </select>
          </div>

          <div className="form-group">
            <label>
              <strong>Post Content:</strong>
            </label>
            <textarea
              name="body"
              className="form-control"
              value={this.state.post.body}
              onChange={(e) => this.handleInputChange(e)}
              rows="6">
            </textarea>
          </div>

          <div className="form-group text-right">
            <button
              className="btn btn-primary">
              Submit Post
            </button>

          </div>

        </form>
      </div>
    )
  }
}

function mapStateToProps({categories}){
   
  return{
    categories
  }
}


export default connect(mapStateToProps)(PostForm);