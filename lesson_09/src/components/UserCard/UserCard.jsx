import React, {useReducer, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import service from '../../services/users';

export default function UserCard() {
  const SET_USER_ACTION = `SET_USER_ACTION`;

  const {userId} = useParams();

  const initArgs = {
    user: {}
  }

  const reducer = (state, {type, payload}) => {
    switch(type){
      case SET_USER_ACTION:
        return {...state, user: payload}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initArgs);

  const getUser = async () => {
    const responce = await service.get(userId);
    dispatch( {type: SET_USER_ACTION, payload: responce} );
  }

  useEffect(() => {
    getUser();
  }, [])

  return Object.keys(state.user).length ? <ul>
    <li>Name: {state.user.name}</li>
    <li>Admin: <input type="checkbox" defaultChecked={state.user.admin} /></li>
    <li>Lector: <input type="checkbox" defaultChecked={state.user.lector} /></li>
    <li>Student: <input type="checkbox" defaultChecked={state.user.student} /></li>
  </ul> : null;
}
