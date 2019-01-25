import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { handleDeleteComment, handleUpdateComment } from '../actions/comments'

class CommentTemplate extends Component {

  state = {
    item: this.props.item,
    commentBefore: '',
    isEditing: false,
  }

  onInputChange(e){
    const { value } = e.target
    this.setState({item: Object.assign({}, this.state.item, {body: value})})
  }

  editComment(){
    const { body } = this.state.item    
    this.setState({isEditing: true, commentBefore: body})
  }

  cancelEditing(){
    this.setState({isEditing: false, item: Object.assign({}, this.state.item, {body: this.state.commentBefore})})
  }

  saveChanges(){
    this.props.dispatch(handleUpdateComment(this.state.item))
    this.setState({isEditing: false})
  }

  deleteComment(){
    const canDelete = window.confirm('Delete this comment? Are you sure?')
    if(canDelete){
      this.props.dispatch(handleDeleteComment(this.state.item.id))
    }
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
              onChange={(e) => this.onInputChange(e)}
              className="form-control"
              value={item.body}
              >
            </textarea>
            <span className="comment-action-buttons">
              <button 
                type="button" 
                className="btn btn-link"
                onClick={() => this.saveChanges()}>
                Save
              </button>
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
              <button 
                type="button" 
                className="btn btn-link text-danger"
                onClick={() => this.deleteComment()}>
                Delete
              </button>
            </span>
          </div>  
        }
      </div>
    )
  }
}

export default connect()(CommentTemplate)