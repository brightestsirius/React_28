import React, { useState } from "react";
import "./style.sass";

import Filter from "./../Filter/Filter";
import ColorPicker from "./../ColorPicker/ColorPicker";
import List from "./../List/List";

export default function Dashboard() {
  const [color, setColor] = useState();
  const [filter, setFilter] = useState();

  return (
    <div>
      <Filter liftingFilter={setFilter} />
      <ColorPicker liftingColor={setColor} />
      <List color={color} filter={filter} />
    </div>
  );
}
