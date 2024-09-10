import { SET_COLOR_ACTION } from "./actions";

const initialArg = {
  color: `#ed143d`,
};

const reducer = (state, { title, payload }) => {
  switch (title) {
    case SET_COLOR_ACTION:
      return { ...state, color: payload };
    default:
      return state;
  }
};

export { reducer, initialArg };
