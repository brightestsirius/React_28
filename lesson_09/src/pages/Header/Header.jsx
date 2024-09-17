import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

export default function Header() {
  const nav = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/users`,
      title: `Users`,
    },
  ];
  return (
    <header>
      <nav>
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
