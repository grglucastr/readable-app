import { 
  LIST_POSTS, 
  ADD_POST, 
  INCREASE_POST_SCORE, 
  DECREASE_POST_SCORE } from '../actions/posts'


export default function posts (state = [], action) {
  switch(action.type){
    case LIST_POSTS:
      return [
        ...state, 
        ...action.posts
      ]
      
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    case INCREASE_POST_SCORE:      
      return state.map((post) => {
        if(post.id === action.post.id){
          return Object.assign({}, post, {voteScore: action.post.voteScore})
        }
        return post
      })

    case DECREASE_POST_SCORE:
      return state.map((post) => {
        if(post.id === action.post.id){
          return Object.assign({}, post, {voteScore: action.post.voteScore})
        }
        return post
      })

    default:
      return state
  }
}