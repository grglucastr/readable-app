import React, { Component } from 'react'


class PostNewComment extends Component {

  state = {
    comment: ''
  }

  handleInputChange(e){
    const {name, value} = e.target   
    this.setState({[name]: value})
  }

  render() {

    const { commentCount } = this.props

    return (
      <div>
        <h6>
          <strong>
            {
              commentCount > 0 ?
              'Comment this Post' :
              'Be the first to comment this Post'
            
            }
          
          </strong>
        </h6>
        
        <form>
          <div>
            <textarea 
              className="form-control"
              name="comment"
              value={this.state.comment}
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

export default PostNewComment