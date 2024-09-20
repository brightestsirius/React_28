import React, { useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";

import service from "../../services/users";
import AppContext from "../../contexts/AppContext";
import {
  SET_USERS_ACTION,
  SORT_USERS_ACTION,
  SET_SORT_ACTION
} from "./../../store/users/actions";

export default function UsersList() {
  const { users, dispatchUsers } = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const sortUsers = searchParams.get(`sort`);

  const getUsers = async () => {
    try {
      const response = await service.get();
      dispatchUsers({ type: SET_USERS_ACTION, payload: response });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if(sortUsers){
        dispatchUsers({ type: SET_SORT_ACTION, payload: sortUsers });
        dispatchUsers({ type: SORT_USERS_ACTION, payload: sortUsers });
    }
  }, [users, sortUsers]);

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li style={{ color: item.admin ? `crimson` : `` }} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  ) : null;
}
