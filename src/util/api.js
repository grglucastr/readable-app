import {
  _getPosts,
  _getPostsByCategory,
  _getPostById,
  _savePost,
  _deletePost,
  _savePostDownVote,
  _savePostUpVote,
  _getCategories,
  _getComments,
  _saveComment,
  _saveCommentDownVote,
  _saveCommentUpVote
} from './_DATA'

export function getPosts() {
  return new Promise((resolve, reject) => {
    _getPosts()
      .then((response) => (resolve(response.json())))
      .catch((error) => (reject(error)))
  })
}

export function getPostsByCategory(category){
  return new Promise ((resolve, reject) => {
    _getPostsByCategory(category)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  })

}

export function getPostById(postId) {
  return new Promise((resolve, reject) => {
    _getPostById(postId)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  })
}

export function savePost(post) {
  return new Promise((resolve, reject) => {
    _savePost(post)
      .then((response) => resolve(response.json()))
      .catch(error => reject(error))
  })
}

export function deletePost(postId) {
  return new Promise((resolve, reject) => {
    _deletePost(postId)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  })
}

export function savePostUpVote(postId) {
  return new Promise((resolve, reject) => {
    _savePostUpVote(postId)
      .then((post) => resolve(post.json()))
      .catch((error) => reject(error))
  })
}

export function savePostDownVote(postId) {
  return new Promise((resolve, reject) => {
    _savePostDownVote(postId)
      .then((post) => resolve(post.json()))
      .catch((error) => reject(error))
  })
}

export function saveCommentUpVote(commentId) {
  return new Promise((resolve, reject) => {
    _saveCommentUpVote(commentId)
      .then((comment) => resolve(comment.json()))
      .catch((error) => reject(error))
  })
}

export function saveCommentDownVote(commentId) {
  return new Promise((resolve, reject) => {
    _saveCommentDownVote(commentId)
      .then((comment) => resolve(comment.json()))
      .catch((error) => reject(error))
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