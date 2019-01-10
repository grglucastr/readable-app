import { LIST_POSTS, ADD_POST } from '../actions/posts'


export default function posts (state = [], action) {
  switch(action.type){
    case LIST_POSTS:
      return action.posts
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    default:
      return state
  }
}