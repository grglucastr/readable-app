import { LIST_COMMENTS, ADD_COMMENT } from '../actions/comments'

export default function comments (state = [], action) {

  switch (action.type) {
    case LIST_COMMENTS:
      return action.comments
    
    case ADD_COMMENT:
      return [
        ...state,
        action.comment
      ]

    default:
      return state
  }
}