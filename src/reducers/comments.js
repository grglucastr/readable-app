import { 
  LIST_COMMENTS, 
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  INCREASE_COMMENT_SCORE,
  DECREASE_COMMENT_SCORE,
  CLEAR_COMMENTS_LIST
 } from '../actions/comments'

export default function comments (state = [], action) {

  switch (action.type) {
    case LIST_COMMENTS:
      return action.comments
    
    case UPDATE_COMMENT:
      return state.map((comment) => {
        if(comment.id === action.comment.id){
          return action.comment
        }
        return comment
      })

    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ]
    
    case INCREASE_COMMENT_SCORE:
    case DECREASE_COMMENT_SCORE:
      return state.map((comment) => {
        if(comment.id === action.comment.id){
          return Object.assign({}, comment, {voteScore: action.comment.voteScore})
        }
        return comment
      })

    case CLEAR_COMMENTS_LIST: 
      return action.comments
    
    case REMOVE_COMMENT:
      return state.filter((comment) => (comment.id !== action.comment.id))

    default:
      return state
  }
}