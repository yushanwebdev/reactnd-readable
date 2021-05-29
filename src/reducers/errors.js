import { ERROR_ADD } from "../actions/errors";

export default function errors(state = [], action) {
  switch (action.type) {
    case ERROR_ADD:
      return [action.error];
    default:
      return state;
  }
}
