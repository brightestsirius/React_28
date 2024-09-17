import React, { useContext } from "react";

import UsersContext from "../../contexts/UsersContext";

export default function UsersStitistics() {
  const {
    state: { users },
  } = useContext(UsersContext);

  return <div>
    Users stitistics:
    <ul>
      <li>All: {users.length}</li>
      <li>Admins: {users.filter(item => item.admin).length}</li>
      <li>Lectors: {users.filter(item => item.lector).length}</li>
      <li>Students: {users.filter(item => item.student).length}</li>
    </ul>
  </div>;
}
