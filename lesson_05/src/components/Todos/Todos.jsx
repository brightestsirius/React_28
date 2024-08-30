import React, { useState, useEffect } from "react";

export default function Todos({
  sortedList,
  getClassName,
  handleItemCompleted,
  handleItemDelete,
}) {
  return sortedList.length ? (
    <ul>
      {sortedList.map((item) => (
        <li
          className={getClassName(item)}
          key={item.id}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
