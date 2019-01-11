import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class ContentRate extends Component {

  increaseScore(e){
    const { item } = this.props
    console.log('increase', item);

    if(item.parentId){
      // is comment
      return
    }

    //is post
  }

  decreaseScore(e){
    const { item } = this.props
    console.log('decrease', item);

    if(item.parentId){
      // is comment
      return
    }

    //is post
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