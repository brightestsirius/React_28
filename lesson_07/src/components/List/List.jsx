import React, { useState, useEffect } from "react";

import service from "./../../services/todos";

export default function List() {
  const [list, setList] = useState([]);

  const renderList = async () => {
    const response = await service.get();
    setList(response);
  };

  useEffect(() => {
    renderList();
  }, []);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  ) : null;
}
