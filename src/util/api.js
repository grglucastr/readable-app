import {
  _getPosts,
  _savePost,
  _getCategories,
  _getComments,
  _saveComment,
} from './_DATA'

export function getPosts() {
  return new Promise((resolve, reject) => {
    _getPosts()
      .then((response) => (resolve(response.json())))
      .catch((error) => (reject(error)))
  })
}

export function savePost(post) {
  return new Promise((resolve, reject) => {
    _savePost(post)
      .then((response) => resolve(response.json()))
      .catch(error => reject(error))
  })
}

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

export function getComments(postId) {
  return new Promise((resolve, reject) => {
    _getComments(postId)
      .then((response) => (resolve(response.json())))
      .catch((error) => (reject(error)))
  })
}

export function saveComment(comment) {
  return new Promise((resolve, reject) => {
    _saveComment(comment)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  })
}