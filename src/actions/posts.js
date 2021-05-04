import {
  getPosts,
  votePost,
  addPost,
  updatePost,
  getCategoryPosts,
} from "../utils/API";

export const POSTS_GET = "POSTS_GET";
export const POST_UPDATE = "POST_UPDATE";

function addStorePosts(posts) {
  return {
    type: POSTS_GET,
    posts,
  };
}

export function handleFetchPosts() {
  return (dispatch) =>
    getPosts().then((posts) => dispatch(addStorePosts(posts)));
}

export function handleFetchCatPosts(path) {
  return (dispatch) =>
    getCategoryPosts(path).then((posts) => dispatch(addStorePosts(posts)));
}

function updateStorePost(post) {
  return {
    type: POST_UPDATE,
    post,
  };
}

export function handleVotePost(id, option) {
  return (dispatch) =>
    votePost(id, option).then((post) => dispatch(updateStorePost(post)));
}

export function handleAddPost(data) {
  return (dispatch) =>
    addPost(data).then((post) => dispatch(updateStorePost(post)));
}

export function handleUpdatePost(data) {
  return (dispatch) =>
    updatePost(data).then((post) => dispatch(updateStorePost(post)));
}
