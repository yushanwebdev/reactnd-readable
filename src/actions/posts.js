import {
  getPosts,
  votePost,
  addPost,
  updatePost,
  getCategoryPosts,
} from "../utils/API";
import { addError } from "./errors";

export const POSTS_GET = "POSTS_GET";
export const POST_UPDATE = "POST_UPDATE";
export const POST_VOTE = "POST_VOTE";

function addStorePosts(posts) {
  return {
    type: POSTS_GET,
    payload: posts,
  };
}

export function handleFetchPosts() {
  return (dispatch) =>
    getPosts()
      .then((posts) => dispatch(addStorePosts(posts)))
      .catch(() => dispatch(addError()));
}

export function handleFetchCatPosts(path) {
  return (dispatch) =>
    getCategoryPosts(path)
      .then((posts) => dispatch(addStorePosts(posts)))
      .catch((e) => addError(e));
}

function updateStorePost(post) {
  return {
    type: POST_UPDATE,
    payload: post,
  };
}

export function handleAddPost(data) {
  return (dispatch) =>
    addPost(data).then((post) => dispatch(updateStorePost(post)));
}

export function handleUpdatePost(data) {
  return (dispatch) =>
    updatePost(data).then((post) => dispatch(updateStorePost(post)));
}

function changeVotePost(payload) {
  return {
    type: POST_VOTE,
    payload,
  };
}

export function handleVotePost(vote) {
  return (dispatch) => {
    dispatch(changeVotePost(vote));
    return votePost(vote).catch((e) => {
      addError(e);
      dispatch(
        changeVotePost({
          ...vote,
          option: vote.option === "upVote" ? "downVote" : "upVote",
        })
      );
    });
  };
}
