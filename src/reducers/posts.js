import { POSTS_GET, POST_UPDATE, POST_VOTE } from "../actions/posts";

export default function posts(state = [], action) {
  switch (action.type) {
    case POSTS_GET:
      return action.payload;
    case POST_UPDATE:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case POST_VOTE:
      const { id, option } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore:
            option === "upVote" ? ++state[id].voteScore : --state[id].voteScore,
        },
      };
    default:
      return state;
  }
}
