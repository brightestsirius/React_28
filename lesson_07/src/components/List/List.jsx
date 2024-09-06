import React, { useState, useEffect } from "react";

import service from "./../../services/todos";

import ListItem from "./ListItem";

export default function List() {
  const [list, setList] = useState([]);

  const renderList = async () => {
    const response = await service.get();
    setList(response);
  };

  useEffect(() => {
    renderList();
  }, []);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    renderList();
  };

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleClick={() => handleItemDelete(item.id)}
        />
      ))}
    </ul>
  ) : null;
}
