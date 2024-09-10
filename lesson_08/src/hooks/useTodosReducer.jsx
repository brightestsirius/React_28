import React, { useEffect } from "react";

import service from "../services/todos";

import {
  TODOS_ITEM_CHANGE_ACTION,
  TODOS_SORT_ACTION,
  TODOS_SET_ACTION,
} from "../store/todos/actions";

export default function useTodosReducer(state, dispatch) {
  const getTodos = async () => {
    const response = await service.get();
    dispatch({ title: TODOS_SET_ACTION, payload: response });
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    dispatch({ title: TODOS_SORT_ACTION });
  }, [state.todos]);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    getTodos();
  };

  const handleItemChangePriority = (item) => {
    dispatch({
      title: TODOS_ITEM_CHANGE_ACTION,
      payload: { ...item, priority: !item.priority },
    });
  };

  return { state, handleItemDelete, handleItemChangePriority };
}
