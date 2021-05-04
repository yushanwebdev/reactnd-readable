import { CATEGORIES_GET } from "../actions/categories";

export default function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES_GET:
      return action.cats;
    default:
      return state;
  }
}
