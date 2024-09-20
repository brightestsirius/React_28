import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import thunks from "../../store/users/thunk";

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.getUsers());
  }, []);

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  ) : null;
}