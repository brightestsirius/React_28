import React, { useReducer, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import './style.sass'

import service from "../../services/users";

export default function UsersList() {
  const [searchParams] = useSearchParams();
  let sortParam = searchParams.get(`sort`);

  const initialArgs = {
    users: [],
    sortedUsers: []
  };

  const SET_USERS_ACTION = `SET_USERS_ACTION`;
  const SORT_USERS_ACTION = `SORT_USERS_ACTION`;

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_USERS_ACTION:
        return { ...state, users: payload };
      case SORT_USERS_ACTION:
        return {...state, sortedUsers: state.users.sort((a,b) => {
          if(sortParam === `asc`) return a.admin-b.admin;
          else return b.admin-a.admin;
        })}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArgs);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    dispatch({type: SORT_USERS_ACTION})
  }, [state.users, sortParam])

  const getUsers = async () => {
    try {
      const response = await service.get();
      dispatch({ type: SET_USERS_ACTION, payload: response });
    } catch (err) {
      console.log(err);
    }
  };

  const getClassName = (item) => {
    const classes = [];
    if (item.admin) classes.push(`item--admin`);
    return classes.join(` `);
  };

  return state.users.length ? (
    <ul>
      {state.sortedUsers.map((item) => (
        <li key={item.id} className={getClassName(item)}>
          <Link to={item.id}>{item.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
