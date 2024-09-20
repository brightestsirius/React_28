import { SORT_ASC } from "./../../constants/users";
import { SET_SORT_ACTION, SET_USERS_ACTION, SORT_USERS_ACTION } from "./actions";

const initArgs = {
  sortUsers: SORT_ASC,
  users: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SORT_ACTION:
      return { ...state, sortUsers: payload };
    case SET_USERS_ACTION:
      return { ...state, users: payload };
    case SORT_USERS_ACTION:
      return {
        ...state,
        users: state.users.sort((a, b) =>
          payload === SORT_ASC ? a.admin - b.admin : b.admin - a.admin
        ),
      };
    default:
      return state;
  }
};

export { reducer, initArgs };
