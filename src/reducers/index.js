import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import comments from "./comments";
import errors from "./errors";

export default combineReducers({
  categories,
  posts,
  comments,
  errors,
});
