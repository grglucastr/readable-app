import {getComments} from '../util/api'

export const LIST_COMMENTS = 'LIST_COMMENTS'

function listComments (comments){
  return{
    type: LIST_COMMENTS,
    comments
  }
}

export function handleLoadComments (postId) {
  return (dispatch) => {
    getComments(postId).then((response) => {           
      dispatch(listComments(response))
    })
  }
}
