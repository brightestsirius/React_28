import React from "react";

import useForm from "../../hooks/useForm";

export default function Form({ liftingNewItem }) {
  const {
    newItem,
    formRef,
    handleNewItemTitle,
    handleNewItemCompleted,
    handleFormSubmit,
  } = useForm(liftingNewItem);

  return (
    <form ref={formRef} className="todos__form" onSubmit={handleFormSubmit}>
      <label>
        Title{" "}
        <input
          type="text"
          defaultValue={newItem.title}
          onChange={handleNewItemTitle}
        />
      </label>
      <label>
        Completed{" "}
        <input
          type="checkbox"
          defaultChecked={newItem.completed}
          onChange={handleNewItemCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
