import {getComments, saveComment} from '../util/api'

export const LIST_COMMENTS = 'LIST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

function listComments (comments){
  return{
    type: LIST_COMMENTS,
    comments
  }
}

function addComment (comment){  
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function handleLoadComments (postId) {
  return (dispatch) => {
    getComments(postId).then((response) => {           
      dispatch(listComments(response))
    })
  }
}


export function handleAddNewComment (comment){
  return (dispatch) => {
    saveComment(comment)
    .then((response) => {
      dispatch(addComment(response))
      alert('Comment posted!')
    })
    .catch((error) => {
      alert('An error occurred when posting comment, please try again.')
    })
    
  }
}