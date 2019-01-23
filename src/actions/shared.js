import { listCategories } from '../actions/categories'

import { 
  getCategories,
  getPosts,
} from '../util/api'

export function handleInitialData(){
  return (dispatch) => {
    Promise
      .all([getCategories(), getPosts()])
      .then(([{categories}]) => {        
        dispatch(listCategories(categories))
      })
  }
}