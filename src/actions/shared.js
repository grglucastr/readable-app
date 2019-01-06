import { listCategories } from '../actions/categories'
import { listPosts } from '../actions/posts'

import { 
  getCategories,
  getPosts,
} from '../util/api'

export function handleInitialData(){
  return (dispatch) => {
    Promise
      .all([getCategories(), getPosts()])
      .then(([{categories}, posts]) => {        
        dispatch(listCategories(categories))
        dispatch(listPosts(posts))
      })
  }
}