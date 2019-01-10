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