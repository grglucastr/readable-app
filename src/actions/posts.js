import { savePost } from '../util/api'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'

export function listPosts(posts) {
  return {
    type: LIST_POSTS,
    posts
  }
}

function addPost (post){
  return{
    type: ADD_POST,
    post
  }
}

export function handleAddPost(post){
  return (dispatch) => {
    savePost(post)
      .then((response) => {
        dispatch(addPost(response))
        alert('Posted!')
      })
      .catch(() => (alert('An error occurred while trying to submit post.')))
  }
}