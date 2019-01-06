import {_getCategories} from './_DATA'

export function getCategories(){
  return new Promise((resolve, reject) => {
    _getCategories()
      .then((response) => (resolve(response.json())))
      .catch((error) => (reject(error)) )
  })
}