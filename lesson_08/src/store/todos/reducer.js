import {
  TODOS_ITEM_CHANGE_ACTION,
  TODOS_SORT_ACTION,
  TODOS_SET_ACTION,
} from "./actions";

const initialArg = {
  todos: [],
};

const reducer = (state, { title, payload }) => {
  switch (title) {
    case TODOS_ITEM_CHANGE_ACTION:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    case TODOS_SORT_ACTION:
      return {
        ...state,
        todos: state.todos.sort((a, b) => b.priority - a.priority),
      };
    case TODOS_SET_ACTION:
      return { ...state, todos: payload };
    default:
      return state;
  }
};

export { reducer, initialArg };
