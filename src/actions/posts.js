import { savePost, savePostUpVote, savePostDownVote } from '../util/api'

export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'
export const INCREASE_POST_SCORE = 'INCREASE_POST_SCORE'
export const DECREASE_POST_SCORE = 'DECREASE_POST_SCORE'

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

function increasePostScore(post){
  return{
    type: INCREASE_POST_SCORE,
    post
  }
}

function decreasePostScore(post){
  return {
    type: DECREASE_POST_SCORE,
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


export function handleIncreasePost(postId) {
  return (dispatch) => {
    savePostUpVote(postId)
      .then((post) => {
        dispatch(increasePostScore(post))
      })
      .catch(() => (alert('An error occurred during voting up. Please try again.')))
  }
}

export function handleDecreasePost(postId) {
  return (dispatch) => {
    savePostDownVote(postId)
      .then((post) => {
        dispatch(decreasePostScore(post))
      })
      .catch(() => (alert('An error occurred during voting up. Please try again.')))
  }
}