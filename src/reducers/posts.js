import { POSTS_GET, POST_UPDATE, POST_VOTE } from "../actions/posts";

export default function posts(state = {}, action) {
  const { id, option } = action.payload;
  switch (action.type) {
    case POSTS_GET:
      return action.posts;
    case POST_UPDATE:
      return state.map((item) =>
        item.id === action.post.id ? action.post : item
      );
    case POST_VOTE:
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
