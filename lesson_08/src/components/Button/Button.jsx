import React, { useContext } from "react";

import ListContext from "../../contexts/ListContext";

export default function Button({ title, handleClick }) {
  const { color } = useContext(ListContext);

  return (
    <button style={{ color }} onClick={handleClick}>
      {title}
    </button>
  );
}
