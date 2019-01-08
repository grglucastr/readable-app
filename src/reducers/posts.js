import { LIST_POSTS } from '../actions/posts'


export default function posts (state = [], action) {
  switch(action.type){
    case LIST_POSTS:
      return action.posts
    default:
      return state
  }
}