import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sortList } from "./../../store/features/list/slice";
import thunks from "./../../store/features/list/thunks";

export default function List() {
  const { list, isLoading, isError } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchList());
  }, []);

  useEffect(() => {
    dispatch(sortList());
  }, [list]);

  const handleItemCompleted = (item) => {
    dispatch(thunks.fetchListItemCompleted(item));
  };

  return list.length ? (
    <ul>
      {list.map((item) => (
        <li
          style={{ color: item.completed ? `crimson` : `black` }}
          key={item.id}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>Error: {isError}</p>
  ) : null;
}
