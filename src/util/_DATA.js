const PORT = process.env.PORT || 3001
const BASE_URL = `http://localhost:${PORT}`
const HEADERS = { headers: { 'Authorization': 'jdskfj333' }}

export function _getPosts(){
  const url = `${BASE_URL}/posts`
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

export function _savePostUpVote(postId) {
  const url = `${BASE_URL}/posts/${postId}`
  const request = {
    method: 'post',
    headers: {'Content-Type':'application/json', 'Authorization':'jai2jdi'},
    body: JSON.stringify({option: "upVote"})
  }
  return fetch(url, request)
}

export function _savePostDownVote(postId){
  const url = `${BASE_URL}/posts/${postId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': 'ausdu23'},
    body: JSON.stringify({option: "downVote"})
  }
  return fetch(url, request)
}

export function _saveCommentUpVote(commentId) {
  const url = `${BASE_URL}/comments/${commentId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': '99843jkl'},
    body: JSON.stringify({option: "upVote"})
  }
  return fetch(url, request)
}

export function _saveCommentDownVote(commentId){
  const url = `${BASE_URL}/comments/${commentId}`
  const request = {
    method: 'post',
    headers: {'Content-Type': 'application/json', 'Authorization': '9uu848uf4'},
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