import { CATEGORIES_GET, CATEGORY_POSTS } from "../actions/categories";

export default function categories(state = {}, action) {
  switch (action.type) {
    case CATEGORIES_GET:
      return {
        ...state,
        ...action.cats,
      };
    case CATEGORY_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    default:
      return state;
  }
}
