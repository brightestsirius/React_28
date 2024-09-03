import React, { useState, useEffect } from "react";
import "./style.sass";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const request = await fetch(
          `https://6675570ea8d2b4d072efa0bb.mockapi.io/todos`
        ),
        response = await request.json();

      setTodos(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  });

  const getClassName = (item) => {
    const classes = [];
    if (item.priority) classes.push(`item--priority`);
    return classes.join(` `);
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li className={getClassName(item)} key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  ) : null;
}
