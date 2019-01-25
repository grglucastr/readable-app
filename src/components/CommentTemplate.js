import React, { Component } from 'react'

class CommentTemplate extends Component {

  state = {
    item: this.props.item,
    isEditing: false,
  }

  editComment(){
    this.setState({isEditing: true})
  }

  cancelEditing(){
    this.setState({isEditing: false})
  }


  render(){
    const  { item, isEditing } = this.state;

    return(
      <div>
        <h4 style={{marginBottom: '1px'}}>{item.author}</h4>    
        {
          isEditing ?
          <div>
            <textarea 
              className="form-control"
              value={item.body}
              >
            </textarea>
            <span className="comment-action-buttons">
              <button type="button" className="btn btn-link">Save</button>
              <button 
                type="button" 
                className="btn btn-link text-danger" 
                onClick={() => this.cancelEditing()}>
                Cancel
              </button>
            </span>
          </div>
          :
          <div>
            <p className="text-normal">{item.body}</p>
            <span className="comment-action-buttons">
              <button 
                type="button" 
                className="btn btn-link"
                onClick={() => this.editComment()}>
                Edit
              </button>
              <button type="button" className="btn btn-link text-danger">Delete</button>
            </span>
          </div>  
        }
      </div>
    )
  }
}

export default CommentTemplate;