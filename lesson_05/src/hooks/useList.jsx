import React, { useState, useEffect } from "react";

import service from "./../services/todos";

export default function useList() {
  const [list, setList] = useState([]);
  const [sortedList, setSortedList] = useState([]);

  const [newItem, setNewItem] = useState({});

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setSortedList(list.sort((a, b) => a.completed - b.completed));
  }, [list]);

  useEffect(() => {
    if (Object.keys(newItem).length)
      setList((prevState) => [...prevState, newItem]);
  }, [newItem]);

  const getClassName = (item) => {
    const classes = [];
    if (item.completed) classes.push(`item--completed`);
    return classes.join(` `);
  };

  const handleItemDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await service.delete(id);

      setList((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      const response = await service.patch(item.id, {
        ...item,
        completed: !item.completed,
      });

      setList((prevState) =>
        prevState.map((item) => {
          if (item.id === response.id) item = response;
          return item;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return {
    sortedList,
    getClassName,
    handleItemCompleted,
    handleItemDelete,
    setNewItem,
  };
}
