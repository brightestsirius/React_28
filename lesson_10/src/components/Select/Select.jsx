import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";
import { SORT_ASC, SORT_DESC } from "../../constants/users";
import { SET_SORT_ACTION } from "../../store/users/actions";

export default function Select() {
  const { sortUsers, dispatchUsers } = useContext(AppContext);

  const handleSelect = (e) =>
    dispatchUsers({ type: SET_SORT_ACTION, payload: e.target.value });

  return (
    <div>
      <select onChange={handleSelect} defaultValue={sortUsers}>
        <option value={SORT_ASC}>{SORT_ASC}</option>
        <option value={SORT_DESC}>{SORT_DESC}</option>
      </select>
    </div>
  );
}