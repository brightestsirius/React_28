import React, { useContext } from "react";

import ListItem from "./ListItem";
import useList from "../../hooks/useList";

import ListContext from "../../contexts/ListContext";

export default function List() {
  const { color, filter } = useContext(ListContext);

  const { filteredList, handleItemDelete } = useList(filter);

  return filteredList.length ? (
    <ul style={{ color }}>
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleClick={() => handleItemDelete(item.id)}
        />
      ))}
    </ul>
  ) : null;
}
