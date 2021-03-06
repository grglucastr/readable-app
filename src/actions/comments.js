import {
  getComments, 
  saveComment,
  saveCommentChanges,
  saveCommentUpVote,
  saveCommentDownVote,
  deleteComment,
} from '../util/api'

export const LIST_COMMENTS = 'LIST_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const INCREASE_COMMENT_SCORE = 'INCREASE_COMMENT_SCORE'
export const DECREASE_COMMENT_SCORE = 'DECREASE_COMMENT_SCORE'
export const CLEAR_COMMENTS_LIST = 'CLEAR_COMMENTS_LIST'

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

function increaseCommentScore(comment) {
  return {
    type: INCREASE_COMMENT_SCORE,
    comment
  }
}

function decreaseCommentScore(comment) {
  return {
    type: DECREASE_COMMENT_SCORE,
    comment
  }
}

function removeComment(comment){
  return {
    type: REMOVE_COMMENT,
    comment
  }
}

function updateComment(comment){
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export function clearCommentList(){
  return{
    type: CLEAR_COMMENTS_LIST,
    comments: []
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

export function handleIncreaseComment(commentId) {
  return (dispatch) => {
    saveCommentUpVote(commentId)
      .then((comment) => {
        dispatch(increaseCommentScore(comment))
        handleLoadComments(comment.parentId)
      })
      .catch(() => (alert('An error occurred during voting up. Please try again.')))
    
  }
}

export function handleDecreaseComment(commentId) {
  return (dispatch) => {
    saveCommentDownVote(commentId)
      .then((comment) => (dispatch(decreaseCommentScore(comment))))
      .catch(() => (alert('An error occurred during voting up. Please try again.')))
  }
}

export function handleDeleteComment(commentId){
  return (dispatch) => {
    deleteComment(commentId)
      .then((comment) => {
        alert('Comment deleted')
        dispatch(removeComment(comment))
      })
      .catch((error) => {
        alert('An error occurred when deleting comment, please try again.')
      })
  }
}

export function handleUpdateComment(comment){
  return (dispatch) => {
    saveCommentChanges(comment)
      .then((commentUpdated) => {
        alert('Comment Updated!')
        dispatch(updateComment(commentUpdated))
      })
  }
}