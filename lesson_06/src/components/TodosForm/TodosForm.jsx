import React, { useState, useRef } from "react";

import service from "../../services/todos";

export default function TodosForm({ liftingNewTodo }) {
  const DEFAULT_NEW_TODO = {
    title: `Hello, world!`,
    completed: true,
  };
  const [newTodo, setNewTodo] = useState(DEFAULT_NEW_TODO);

  const formRef = useRef(); // {current: <form>} => formRef.current
  const inputTitleRef = useRef();

  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleNewTodoCompleted = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      completed: event.target.checked,
    }));
  };

  const handleNewTodoSubmit = async (e) => {
    e.preventDefault();
    //console.log(`1. Submit form`);

    const response = await service.post(newTodo);
    //console.log(`2. Response`, response);

    liftingNewTodo(response);

    // reset();
    setNewTodo(DEFAULT_NEW_TODO);
    formRef.current.reset();
    //inputTitleRef.current.style.borderColor = `crimson`;
  };

  return (
    <form ref={formRef} className="todos__form" onSubmit={handleNewTodoSubmit}>
      <label>
        Title:{" "}
        <input
          ref={inputTitleRef}
          type="text"
          defaultValue={newTodo.title}
          onChange={handleNewTodoTitle}
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleNewTodoCompleted}
        />
      </label>
      <button>Add new todo</button>
    </form>
  );
}
