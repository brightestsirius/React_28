import React, { useContext } from "react";

import { USERS_SORT_ASC, USERS_SORT_DESC } from "./../../store/constanst";

import AppContext from "../../contexts/AppContext";

import { SET_SORT_USERS_ACTION } from "../../store/actions";

export default function SelectUsersSort() {
  const { sortUsers, dispatch } = useContext(AppContext);

  const handleSelect = (e) =>
    dispatch({ type: SET_SORT_USERS_ACTION, payload: e.target.value });

  return (
    <select defaultValue={sortUsers} onChange={handleSelect}>
      <option value={USERS_SORT_ASC}>{USERS_SORT_ASC}</option>
      <option value={USERS_SORT_DESC}>{USERS_SORT_DESC}</option>
    </select>
  );
}
