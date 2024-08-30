import React, { useState, useRef } from "react";

import service from "./../services/todos";

import { DEFAULT_NEW_ITEM } from "../constants/todos";

export default function useForm(liftingNewItem) {
  const [newItem, setNewItem] = useState(DEFAULT_NEW_ITEM);

  const formRef = useRef();

  const handleNewItemTitle = (e) =>
    setNewItem((prevState) => ({ ...prevState, title: e.target.value }));

  const handleNewItemCompleted = (e) =>
    setNewItem((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await service.post(newItem);

      setNewItem(DEFAULT_NEW_ITEM);
      formRef.current.reset();

      liftingNewItem(response);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    newItem,
    formRef,
    handleNewItemTitle,
    handleNewItemCompleted,
    handleFormSubmit,
  };
}
