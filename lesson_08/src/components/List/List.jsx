import React, { useContext } from "react";

import ListItem from "./ListItem";
import useList from "../../hooks/useList";

import ListContext from "../../contexts/ListContext";

export default function List() {
  const { filter } = useContext(ListContext);

  const { filteredList, handleItemDelete } = useList(filter);

  return filteredList.length ? (
    <ul>
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
