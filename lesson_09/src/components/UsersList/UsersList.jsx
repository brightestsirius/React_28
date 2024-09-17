import React, { useContext } from "react";
import './style.sass'

import {Link} from 'react-router-dom'

import UsersContext from "../../contexts/UsersContext";

export default function UsersList() {
  const {
    state: { users },
  } = useContext(UsersContext);

  const getClass = (item) => {
    const classes = [`list__item`];

    if (item.admin) classes.push(`list__item--admin`);
    if (item.lector) classes.push(`list__item--lector`);
    if (item.student) classes.push(`list__item--student`);

    return classes.join(` `);
  };

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}`} className={getClass(item)}>{item.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
