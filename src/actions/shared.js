import { getCategories } from '../util/api'
import { listCategories } from '../actions/categories'

export function handleInitialData(){
  return (dispatch) => {
    getCategories().then(({categories}) => {
      dispatch(listCategories(categories))
    })
  }
}