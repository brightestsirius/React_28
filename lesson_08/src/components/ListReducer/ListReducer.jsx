import React, { useReducer, useEffect } from "react";
import service from "../../services/todos";

export default function ListReducer() {
  const initialArg = {
    list: [],
    sortedList: [],
    color: `#E91E63`,
  };

  const LIST_ITEM_DELETE = `LIST_ITEM_DELETE`;
  const LIST_ITEM_CHANGE = `LIST_ITEM_CHANGE`;
  const LIST_SORT = `LIST_SORT`;
  const LIST_SET = `LIST_SET`;

  const reducer = (state, { title, payload }) => {
    switch (title) {
      case LIST_ITEM_DELETE:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== payload),
        };
      case LIST_ITEM_CHANGE:
        return {
          ...state,
          list: state.list.map((item) => {
            if (item.id === payload.id) item = payload;
            return item;
          }),
        };
      case LIST_SORT:
        return {
          ...state,
          sortedList: state.list.sort((a, b) => b.priority - a.priority),
        };
    case LIST_SET:
        return {...state, list: payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArg);

  // dispatch - function
  // dispatch( {} );
  // button => click => dispatch( { title: "LIST_ITEM_DELETE", payload: id } );

  const getList = async () => {
    const response = await service.get();

    const action = {title: LIST_SET, payload: response};
    dispatch(action);
  }

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const action = { title: LIST_SORT };
    dispatch(action);
  }, [state.list]);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    getList();
  };

  const handleItemPriorityChange = (item) => {
    const action = {
      title: LIST_ITEM_CHANGE,
      payload: { ...item, priority: !item.priority },
    };
    dispatch(action);
  };

  return state.sortedList.length ? (
    <ul>
      {state.sortedList.map((item) => (
        <li style={{ color: item.priority ? state.color : `` }} key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          <button onClick={() => handleItemPriorityChange(item)}>
            Change priority
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
