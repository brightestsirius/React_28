import React, {useContext} from "react";

import Button from "./../Button/Button";

import ListContext from "../../contexts/ListContext";

export default function ListItem({ item, handleClick }) {
  const {color} = useContext(ListContext);

  return (
    <li key={item.id} style={{borderBottom: `2px solid ${color}`, width: `fit-content` }}>
      {item.title} <Button title={"Delete"} handleClick={handleClick} />
    </li>
  );
}
