import {
  getComment,
  addComment,
  editComment,
  voteComment,
  deleteComment,
} from "../utils/API";
import { addError } from "./categories";

export const COMMENT_GET = "COMMENT_GET";
export const COMMENT_UPDATE = "COMMENT_UPDATE";
export const COMMENT_VOTE = "COMMENT_VOTE";
export const COMMENT_DELETE = "COMMENT_DELETE";
export const COMMENT_RE_ENABLE = "COMMENT_RE_ENABLE";

function updateComment(payload) {
  return {
    type: COMMENT_UPDATE,
    payload,
  };
}

export function handleFetchComment(id) {
  return (dispatch) =>
    getComment(id)
      .then((comment) => dispatch(updateComment(comment)))
      .catch((e) => addError(e));
}

export function handlePutComment(comment) {
  return (dispatch) =>
    addComment(comment)
      .then((comment) => dispatch(updateComment(comment)))
      .catch((e) => addError(e));
}

export function handleEditComment(comment) {
  return (dispatch) =>
    editComment(comment)
      .then((comment) => dispatch(updateComment(comment)))
      .catch((e) => addError(e));
}

function changeVoteComment(payload) {
  return {
    type: COMMENT_VOTE,
    payload,
  };
}

export function handleVoteComment(vote) {
  return (dispatch) => {
    dispatch(changeVoteComment(vote));
    return voteComment(vote).catch((e) => {
      addError(e);
      dispatch(
        changeVoteComment({
          ...vote,
          option: vote.option === "upVote" ? "downVote" : "upVote",
        })
      );
    });
  };
}

function removeComment(payload) {
  return {
    type: COMMENT_DELETE,
    payload,
  };
}

export function handleRemoveComment(id) {
  return (dispatch) => {
    dispatch(removeComment(id));
    return deleteComment(id).catch((e) => {
      addError(e);
      dispatch(removeComment(id));
    });
  };
}
