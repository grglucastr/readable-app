import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import { handleAddPost, handleUpdatePost } from '../actions/posts';
import { getPostById } from '../util/api'

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
    isEditing: false,
    toPostDetail: false,
    toHome:false
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if( id ){
      getPostById(id).then((post) => {
        this.setState({
          isEditing: true,
          post
        })
      })
    }   
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
  
    if(this.state.post.title === ""){
      return alert("Title field cannot be empty.")
    }

    if(this.state.post.author === ""){
      return alert("Author field cannot be empty.")
    }

    if(this.state.post.category === ""){
      return alert("Please, choose a valid category.")
    }

    if(this.state.post.body === ""){
      return alert("Content box cannot be empty.")
    }

    if( this.state.isEditing ){
      this.props.dispatch(handleUpdatePost(this.state.post))
      this.setState({toPostDetail: true})
      return 
    }

    this.props.dispatch(handleAddPost(this.state.post))
    this.setState({toHome: true})

    this.cleanFields()
  }

  cleanFields = () => {    
    this.setState({
      post: {
        id: uuidv4(),
        timestamp: new Date().getTime(),
        title:'',
        author: '',
        category:'',
        body: '',
      },
      isEditing: false,
      toPostDetail: false,
    })
  }

  render() {

    if(this.props.location.pathname === '/post'){
      if(this.state.isEditing){
        window.location.reload()
      }
    }
    
    const { categories } = this.props

    if(this.state.toHome === true){
      return (
        <Redirect to="/" />
      )
    }

    if( this.state.toPostDetail === true ){
      return (
        <Redirect to={`/posts/${this.state.post.id}`} />
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
              {
                this.state.isEditing ? 'Update Post' : 'Submit Post'
              }
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({categories}){
  return{
    categories,
  }
}

export default withRouter(connect(mapStateToProps)(PostForm));