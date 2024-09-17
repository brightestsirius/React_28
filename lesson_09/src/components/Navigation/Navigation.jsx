import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass";

export default function Navigation() {
  const menu = [
    {
      path: `/`,
      title: `Home`,
    },
    {
      path: `/users`,
      title: `Users`,
    },
  ];

  const getClass = (value) => {    
    const classes = [`menu__item`];
    if(value.isActive) classes.push(`menu__item--active`);
    return classes.join(` `);
  }

  return (
    <nav>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path} className={getClass}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
