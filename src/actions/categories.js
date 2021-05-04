import { getCategories } from "../utils/API";

export const CATEGORIES_GET = "CATEGORIES_GET";

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
