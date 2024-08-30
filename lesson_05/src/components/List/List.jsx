import React from "react";
import "./style.sass";

import Form from "./../Form/Form";
import Todos from "./../Todos/Todos";

import useList from "../../hooks/useList";

export default function List() {
  const {
    sortedList,
    getClassName,
    handleItemCompleted,
    handleItemDelete,
    setNewItem,
  } = useList();

  return (
    <>
      <Form liftingNewItem={setNewItem} />
      <Todos
        sortedList={sortedList}
        getClassName={getClassName}
        handleItemDelete={handleItemDelete}
        handleItemCompleted={handleItemCompleted}
      />
    </>
  );
}
