import React, { useContext } from "react";

import useTodosReducer from "../../hooks/useTodosReducer";
import ListReducerContext from "../../contexts/ListReducerContext";

export default function ListReducer() {
  const { state, todoDispatch } =
    useContext(ListReducerContext);

  const { handleItemDelete, handleItemChangePriority } = useTodosReducer(
    state,
    todoDispatch
  );

  return state.todos.length ? (
    <ul>
      {state.todos.map((item) => (
        <li
          key={item.id}
          style={{ color: item.priority ? state.color : `` }}
        >
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          <button onClick={() => handleItemChangePriority(item)}>
            Change priority
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
