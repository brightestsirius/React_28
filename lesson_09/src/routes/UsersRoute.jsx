import React, { useReducer, useEffect } from "react";

import UsersList from "./../components/UsersList/UsersList";
import UsersStitistics from "./../components/UsersStitistics/UsersStitistics";

import UsersContext from "./../contexts/UsersContext";

import service from "../services/users";

export default function UsersRoute() {
  const SET_USERS_ACTION = `SET_USERS_ACTION`;

  const initArgs = {
    users: [],
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_USERS_ACTION:
        return { ...state, users: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initArgs);

  const getUsers = async () => {
    try {
      const response = await service.get();
      dispatch({ type: SET_USERS_ACTION, payload: response });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h3>Users Route</h3>

      <UsersContext.Provider value={{ state }}>
        <UsersList />
        <UsersStitistics />
      </UsersContext.Provider>
    </div>
  );
}
