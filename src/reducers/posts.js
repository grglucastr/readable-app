import { 
  LIST_POSTS, 
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST, 
  INCREASE_POST_SCORE, 
  DECREASE_POST_SCORE, 
  LIST_POSTS_NEWEST,
  LIST_POSTS_OLDEST,
  LIST_POSTS_HIGHER_VOTES,
  LIST_POSTS_LOWER_VOTES} from '../actions/posts'


export default function posts (state = [], action) {
  switch(action.type){
    case LIST_POSTS:
      return action.posts
      
    case ADD_POST:
      return [
        ...state,
        action.post
      ]
    
    case UPDATE_POST: 
      return state.map((post) => {
        if(post.id === action.post.id){
          return action.post
        }
        return post
      })

    case REMOVE_POST:
           
      return state.map(post => {
        if(post.id === action.post.id){
          return action.post;
        }
        return post
      })
    

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

    case LIST_POSTS_NEWEST:
      return action.posts.concat()
        .sort((a, b) => (b.timestamp - a.timestamp))


    case LIST_POSTS_OLDEST:
      return action.posts.concat()
        .sort((a, b) => (a.timestamp - b.timestamp))

    case LIST_POSTS_HIGHER_VOTES:
      return action.posts.concat()
        .sort((a, b) => (b.voteScore - a.voteScore))

    case LIST_POSTS_LOWER_VOTES:
      return action.posts.concat()
        .sort((a, b) => (a.voteScore - b.voteScore))

    default:
      return state
  }
}