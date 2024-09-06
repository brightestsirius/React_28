import React, { useState, useEffect } from "react";

import service from "../services/todos";

import {
  LIST_FILTER_PRIORITY,
  LIST_FILTER_NON_PRIORITY,
} from "../constants/list";

export default function useList(filter) {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const renderList = async () => {
    const response = await service.get();
    setList(response);
  };

  useEffect(() => {
    renderList();
  }, []);

  useEffect(() => {
    // console.log(`in useEffect for list and filter`, list, filter);
    switch (filter) {
      case LIST_FILTER_PRIORITY:
        setFilteredList(list.filter((item) => item.priority));
        break;
      case LIST_FILTER_NON_PRIORITY:
        setFilteredList(list.filter((item) => !item.priority));
        break;
      default:
        setFilteredList(list);
    }
  }, [filter, list]);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    renderList();
  };

  return { filteredList, handleItemDelete };
}
