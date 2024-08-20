import React from "react";

import { user } from "./../../mockedData/mockedData";

import { renderItem } from "./../../utils/renderList";

export default function ObjectRender() {
  return (
    <ul>
      {Object.keys(user).map((item, index) => (
        <li key={index}>
          {item}: {renderItem(user[item])}
        </li>
      ))}
    </ul>
  );
}
