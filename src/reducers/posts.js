import { POSTS_GET, POST_UPDATE } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case POSTS_GET:
      return action.posts;
    case POST_UPDATE:
      return state.map((item) =>
        item.id === action.post.id ? action.post : item
      );
    default:
      return state;
  }
}
