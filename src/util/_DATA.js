const PORT = process.env.PORT || 3001
const BASE_URL = `http://localhost:${PORT}`
const HEADERS = { headers: { 'Authorization': 'jdskfj333' }}

export function _getCategories(){
  const url = `${BASE_URL}/categories` 
  return fetch(url, HEADERS)
}

export function _getPosts(){
  const url = `${BASE_URL}/posts`
  return fetch(url, HEADERS)
}