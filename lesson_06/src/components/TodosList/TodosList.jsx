import React, { useState, useEffect, useMemo } from "react";

import service from "./../../services/todos";

export default function TodosList({newTodo}) {
  const [todos, setTodos] = useState([]);
  //...

  // const sortedTodos = todos.sort((a,b) => b.priority - a.priority);
  // console.log(sortedTodos);

  const sortedTodos = useMemo(() => todos.sort((a,b) => b.priority - a.priority), [todos]);

  // const [sorted, setSorted] = useState([]);
  // useEffect(() => {
  //   setSorted(todos.sort((a,b) => b.priority - a.priority));
  // }, [todos]);

  const getTodos = async () => {
    //console.log(`in getTodos`);
    const response = await service.get();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    // newTodo === undefined
    // newTodo ==== {...}
    //console.log(`in useEffect in List component for newTodo`, newTodo);
    if(Object.keys(newTodo).length) getTodos();
  }, [newTodo])

  const getClassName = (item) => {
    const classes = [`todos__item`];
    if (item.priority) classes.push(`todos__item--priority`);
    if (item.active) classes.push(`todos__item--active`);
    return classes.join(` `);
  };

  const handleItemDelete = async (e, id) => {
    e.stopPropagation();
    await service.delete(id);
    getTodos();
  };

  const handleChangePriority = async (e, item) => {
    e.stopPropagation();
    await service.put(item.id, { ...item, priority: !item.priority });
    getTodos();
  };

  const handleItemActive = async (item) => {
    if (item.active) {
      delete item.active;
    } else {
      item.active = true;
    }

    await service.put(item.id, item);
    getTodos();
  };

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <li
          key={item.id}
          className={getClassName(item)}
          onClick={() => handleItemActive(item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>{" "}
          <input
            type="checkbox"
            defaultChecked={item.priority}
            onChange={(e) => handleChangePriority(e, item)}
          />
        </li>
      ))}
    </ul>
  ) : null;
}
