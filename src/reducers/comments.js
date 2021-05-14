import {
  COMMENT_UPDATE,
  COMMENT_VOTE,
  COMMENT_DELETE,
} from "../actions/comments";

export default function comments(state = {}, action) {
  const { id, option } = action.payload;
  switch (action.type) {
    case COMMENT_UPDATE:
      return {
        ...state,
        [id]: {
          ...action.payload,
        },
      };
    case COMMENT_VOTE:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore:
            option === "upVote" ? ++state[id].voteScore : --state[id].voteScore,
        },
      };
    case COMMENT_DELETE:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: !state[id].deleted,
        },
      };
    default:
      return state;
  }
}
