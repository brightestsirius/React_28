import React, { useState } from "react";
import "./style.sass";

import TodosForm from "../TodosForm/TodosForm";
import TodosList from "./../TodosList/TodosList";

export default function Todos({ liftingNewTodoToApp }) {
  const [newTodo, setNewTodo] = useState({}); // {...}

  const liftedNewTodo = (item) => {
    //console.log(`in Todos component`, item);
    //liftingNewTodoToApp(item);

    setNewTodo(item);
  };

  return (
    <>
      <TodosForm liftingNewTodo={liftedNewTodo} />
      <TodosList newTodo={newTodo} />
    </>
  );
}
