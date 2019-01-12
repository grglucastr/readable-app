import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv4 from 'uuid/v4'

import { handleAddNewComment } from '../actions/comments'

class PostNewComment extends Component {

  state = {
    body: '',
    author: ''
  }

  handleInputChange(e){
    const {name, value} = e.target   
    this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault()

    const  { id: parentId } = this.props.post
    const commentObj = {
      id: uuidv4(),
      timestamp: new Date().getTime(),
      ...this.state,
      parentId
    }    

    this.props.dispatch(handleAddNewComment(commentObj))
    this.cleanFields()
  }

  cleanFields() {
    this.setState({
      body: '',
      author: ''
    })
  }

  render() {

    const { comments } = this.props

    return (
      <div>
        <h6>
          <strong>
            {
              comments.length > 0 ?
              'Comment this Post' :
              'Be the first to comment this Post'
            }
          </strong>
        </h6>
        
        <form onSubmit={(e) => this.handleSubmit(e) }>
          <div>
            <input
              type="text"
              name="author"
              className="form-control"
              placeholder="Author Name"
              style={{marginBottom: '10px'}}
              value={this.state.author}
              onChange={(event) => this.handleInputChange(event) }
             />
          </div>
          <div>
            <textarea 
              className="form-control"
              name="body"
              placeholder="Enter your comment here"
              value={this.state.body}
              onChange={(event) => this.handleInputChange(event)}
              />
          </div>
          
          <div className="text-right" style={{marginTop: '10px'}}>
            <button className="btn btn-primary">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(PostNewComment)