const PORT = process.env.PORT || 3001
const BASE_URL = `http://localhost:${PORT}`

export function _getCategories(){
  const url = `${BASE_URL}/categories`
  const headers = { headers: { 'Authorization': 'jdskfj333' }}
  return fetch(url, headers)
}