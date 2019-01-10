import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'

class PostForm extends Component {

  state = {
    post: {
      id: uuidv4(),
      timestamp: new Date().getTime(),
      title:'',
      author: '',
      category:'',
      body: '',
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
  
    if(this.state.post.category === ""){
      return alert("Please, choose a valid category.")
    }

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
    return ( 
      <div>
        <hr/>
        <form onSubmit={(e) => this.handleFormSubmit(e)}>
          <h5><strong>Post Form</strong></h5>
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
              className="form-control"
              name="category"
              value={this.state.post.category}
              onChange={(e) => this.handleInputChange(e)}>
                <option>Choose Post Category</option>
                <option value="1">React</option>
                <option value="2">Redux</option>
                <option value="3">Udacity</option>
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


export default PostForm;