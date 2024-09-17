import React, { useContext } from "react";

import UserContext from "../../contexts/userContext";

export default function UserCard() {
  const { state, handleAdminChange, handleLectorChange, handleStudentChange } =
    useContext(UserContext);

  return Object.keys(state.user).length ? (
    <ul>
      <li>{state.user.name}</li>
      <li>
        Admin{" "}
        <input
          type="checkbox"
          defaultChecked={state.user.admin}
          onChange={handleAdminChange}
        />
      </li>
      <li>
        Lector{" "}
        <input
          type="checkbox"
          defaultChecked={state.user.lector}
          onChange={handleLectorChange}
        />
      </li>
      <li>
        Student{" "}
        <input
          type="checkbox"
          defaultChecked={state.user.student}
          onChange={handleStudentChange}
        />
      </li>
    </ul>
  ) : null;
}
