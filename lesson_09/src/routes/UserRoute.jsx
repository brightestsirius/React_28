import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import UserCard from "./../components/UserCard/UserCard";
import UserStatistics from "./../components/UserStatistics/UserStatistics";

import service from "../services/users";

import UserContext from "./../contexts/userContext";

export default function UserRoute() {
  const { userId } = useParams();

  const SET_USER_ACTION = `SET_USER_ACTION`;
  const SET_ACCESSEBILITY_ACTION = `SET_ACCESSEBILITY_ACTION`;

  const initArgs = {
    user: {},
    accessebility: false,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_USER_ACTION:
        return { ...state, user: payload };
      case SET_ACCESSEBILITY_ACTION:
        if(state.user.admin && state.user.lector)
          return {...state, accessebility: true};
        else return {...state, accessebility: false};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initArgs);

  const getUser = async () => {
    try {
      const response = await service.get(userId);
      dispatch({ type: SET_USER_ACTION, payload: response });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(`in useEffect for lector & admin`, state.user);
    if(Object.keys(state.user).length) dispatch({ type: SET_ACCESSEBILITY_ACTION });
  }, [state.user.admin, state.user.lector]);

  const handleAdminChange = async () => {
    try {
      await service.put(state.user.id, {
        ...state.user,
        admin: !state.user.admin,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLectorChange = async () => {
    try {
      await service.put(state.user.id, {
        ...state.user,
        lector: !state.user.lector,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  const handleStudentChange = async () => {
    try {
      await service.put(state.user.id, {
        ...state.user,
        student: !state.user.student,
      });
      getUser();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>User Route</h3>

      <UserContext.Provider
        value={{ state, handleAdminChange, handleLectorChange, handleStudentChange }}
      >
        <UserStatistics />
        <UserCard />
      </UserContext.Provider>
    </div>
  );
}