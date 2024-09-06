import React, {memo} from "react";

import ListItem from "./ListItem";
import useList from "../../hooks/useList";

export default function List({color, filter}) {
  const { filteredList, handleItemDelete } = useList(filter);

  return filteredList.length ? (
    <ul style={{color}}>
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleClick={() => handleItemDelete(item.id)}
        />
      ))}
    </ul>
  ) : null;
};