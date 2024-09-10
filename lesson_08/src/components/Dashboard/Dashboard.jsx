import React, { useState } from "react";
import "./style.sass";

import Filter from "./../Filter/Filter";
import ColorPicker from "./../ColorPicker/ColorPicker";
import List from "./../List/List";

import useLocalStorage from "../../hooks/useLocalStorage";
import { DEFAULT_COLOR, LIST_FILTER_ALL } from "../../constants/list";

import ListContext from "../../contexts/ListContext";

export default function Dashboard() {
  const [color, setColor] = useLocalStorage(`color`, DEFAULT_COLOR);
  const [filter, setFilter] = useLocalStorage(`filter`, LIST_FILTER_ALL);

  return (
    <div>
      <ListContext.Provider value={{ filter, setFilter, color, setColor }}>
        <Filter />
        <ColorPicker />
        <List />
      </ListContext.Provider>
    </div>
  );
}
