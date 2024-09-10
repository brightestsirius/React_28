import React from "react";

import Button from "./../Button/Button";

export default function ListItem({ item, handleClick }) {
  return (
    <li key={item.id}>
      {item.title} <Button title={"Delete"} handleClick={handleClick} />
    </li>
  );
}
