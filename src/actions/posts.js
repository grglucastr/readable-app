export const LIST_POSTS = 'LIST_POSTS'

export function listPosts(posts) {
  return {
    type: LIST_POSTS,
    posts
  }
}