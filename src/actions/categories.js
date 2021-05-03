import { getCategories, getCategoryPosts } from "../utils/API";

export const CATEGORIES_GET = "CATEGORIES_GET";
export const CATEGORY_POSTS = "CATEGORY_POSTS";

function fetchCats(cats) {
  return {
    type: CATEGORIES_GET,
    cats,
  };
}

export function handleFetchCats() {
  return (dispatch) =>
    getCategories().then((cats) => dispatch(fetchCats(cats)));
}

function fetchCatPosts(posts) {
  return {
    type: CATEGORY_POSTS,
    posts,
  };
}

export function handleFetchCatPosts(path) {
  return (dispatch) =>
    getCategoryPosts(path).then((posts) => dispatch(fetchCatPosts(posts)));
}
