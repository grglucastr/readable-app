import {
  _getCategories,
  _getPosts,
} from './_DATA'

export function getCategories(){
  return new Promise((resolve, reject) => {
    _getCategories()
      .then((response) => {
        const cats = response.json()
        resolve(cats)
      })
      .catch((error) => (reject(error)) )
  })
}

export function getPosts() {
  return new Promise((resolve, reject) => {
    _getPosts()
      .then((response) => (resolve(response.json())))
      .catch((error) => (reject(error)))
  })
}