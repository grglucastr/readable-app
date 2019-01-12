import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { handleIncreasePost, handleDecreasePost } from '../actions/posts';
import { handleIncreaseComment, handleDecreaseComment } from '../actions/comments';

class ContentRate extends Component {

  increaseScore(e){
    const { item } = this.props
    if(item.parentId){
      this.props.dispatch(handleIncreaseComment(item.id))
      return
    }
    
    //is post
    this.props.dispatch(handleIncreasePost(item.id))
    
  }

  decreaseScore(e){
    const { item } = this.props
    if(item.parentId){
      this.props.dispatch(handleDecreaseComment(item.id))
      return
    }

    //is post
    this.props.dispatch(handleDecreasePost(item.id))
  }

  render() {
    const { voteScore }  = this.props.item
    return (
      <div className="text-center">
        <div>
          <button
            className="btn btn-default" 
            onClick={(e) => this.increaseScore(e)}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        <div>
          <strong style={{fontSize: '20px', color: voteScore > 0 ? 'green' : 'gray'}}>
            {voteScore}
          </strong>
        </div>
        <button
          className="btn btn-default"
          onClick={(e) => this.decreaseScore(e)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    )
  }
}


export default connect()(ContentRate)