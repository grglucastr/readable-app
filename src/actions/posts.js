import {
  getPosts,
  getPostsByCategory, 
  savePost,
  deletePost, 
  savePostUpVote, 
  savePostDownVote } from '../util/api'

export const LIST_POSTS = 'LIST_POSTS'
export const LIST_POSTS_BY_CATEGORY = 'LIST_POSTS_BY_CATEGORY'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const INCREASE_POST_SCORE = 'INCREASE_POST_SCORE'
export const DECREASE_POST_SCORE = 'DECREASE_POST_SCORE'

export function listPosts(posts) {
  return {
    type: LIST_POSTS,
    posts
  }
}

function addPost(post){
  return{
    type: ADD_POST,
    post
  }
}

function removePost(post){
  return {
    type: REMOVE_POST,
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

export function handleListPosts(){
  return (dispatch) => {
    getPosts()
      .then((posts) => {
        dispatch(listPosts(posts))
      })
  }
}

export function handleListPostsCategory(category){
  
  return (dispatch) => {
    getPostsByCategory(category)
      .then((posts) => {         
        dispatch(listPosts(posts)) 
      })
      .catch((error) => (alert('An error occurred while trying to fetch posts by category. Please try again.')))
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
      .catch(() => (alert('An error occurred while voting up. Please try again.')))
  }
}

export function handleDecreasePost(postId) {
  return (dispatch) => {
    savePostDownVote(postId)
      .then((post) => {
        dispatch(decreasePostScore(post))
      })
      .catch(() => (alert('An error occurred while voting down. Please try again.')))
  }
}

export function handleDeletePost(postId){
  return (dispatch) => {
    deletePost(postId)
      .then((postDeleted) => {
        dispatch(removePost(postDeleted))
      })
      .catch(() => (alert('An error occurred while deleting. Please try again.')))
  }
}