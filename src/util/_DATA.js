const PORT = process.env.PORT || 3001
const BASE_URL = `http://localhost:${PORT}`
const HEADERS = { headers: { 'Authorization': 'jdskfj333' }}

export function _getPosts(){
  const url = `${BASE_URL}/posts`
  return fetch(url, HEADERS)
}

export function _getPostsByCategory(category){
  const url = `${BASE_URL}/${category}/posts`
  return fetch(url, HEADERS)
}

export function _getPostById(postId) {
  const url = `${BASE_URL}/posts/${postId}`
  return fetch(url, HEADERS)
}

export function _savePost(post) {
  const url = `${BASE_URL}/posts`
  const request = {
    method: 'post',
    headers: {'Content-Type':'application/json', 'Authorization': 'jdskfj333'},
    body: JSON.stringify(post)
  }

  return fetch(url, request)
}

export function _deletePost(postId) {
  const url = `${BASE_URL}/posts/${postId}`
  const request = {
    method: 'delete',
    headers: {'Content-Type':'application/json', 'Authorization': 'jdskfj333'}
  }
  return fetch(url, request)
}

export function _savePostUpVote(postId) {
  const url = `${BASE_URL}/posts/${postId}`
  const request = {
    method: 'post',
    headers: {'Content-Type':'application/json', 'Authorization':'jdskfj333'},
    body: JSON.stringify({option: "upVote"})
  }
  return fetch(url, request)
}

export function _savePostDownVote(postId){
  const url = `${BASE_URL}/posts/${postId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': 'jdskfj333'},
    body: JSON.stringify({option: "downVote"})
  }
  return fetch(url, request)
}

export function _saveCommentUpVote(commentId) {
  const url = `${BASE_URL}/comments/${commentId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': 'jdskfj333'},
    body: JSON.stringify({option: "upVote"})
  }
  return fetch(url, request)
}

export function _saveCommentDownVote(commentId){
  const url = `${BASE_URL}/comments/${commentId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': 'jdskfj333'},
    body: JSON.stringify({option: "downVote"})
  }
  return fetch(url, request)
}

export function _getCategories(){
  const url = `${BASE_URL}/categories` 
  return fetch(url, HEADERS)
}

export function _getComments(postId){
  const url = `${BASE_URL}/posts/${postId}/comments`
  return fetch(url, HEADERS)
}

export function _saveComment(comment) {
  const url = `${BASE_URL}/comments/`
  const request = {
    method: 'post',
    headers: {'Content-Type':'application/json', 'Authorization': 'jdskfj333'},
    body: JSON.stringify(comment)
  }
  return fetch(url, request);
}