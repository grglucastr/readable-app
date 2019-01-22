import { 
  LIST_COMMENTS, 
  ADD_COMMENT,
  INCREASE_COMMENT_SCORE,
  DECREASE_COMMENT_SCORE,
  CLEAR_COMMENTS_LIST
 } from '../actions/comments'

export default function comments (state = [], action) {

  switch (action.type) {
    case LIST_COMMENTS:
      return action.comments
    
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

    default:
      return state
  }
}