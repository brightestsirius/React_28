import React, { useContext, useEffect } from "react";
import {useSearchParams} from 'react-router-dom'

import AppContext from "../../contexts/AppContext";
import { SORT_USERS_ACTION, CHANGE_USER_ACTION, SET_SORT_USERS_ACTION } from "../../store/actions";

export default function UsersList() {
  const { users, sortUsers, dispatch } = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const sortQueryParam = searchParams.get(`sort`);

  useEffect(() => {
    dispatch({ type: SORT_USERS_ACTION });
  }, [users, sortUsers]);

  useEffect(() => {
    if(sortQueryParam){
        dispatch({type: SET_SORT_USERS_ACTION, payload: sortQueryParam})
    }
  }, [sortQueryParam])

  const handleChangeAdmin = (user) => {
    dispatch({
      type: CHANGE_USER_ACTION,
      payload: { ...user, admin: !user.admin },
    });
  };

  return users.length ? (
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{ color: user.admin ? `crimson` : `` }}>
          {user.name}{" "}
          <button onClick={() => handleChangeAdmin(user)}>
            Change Admin status
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
