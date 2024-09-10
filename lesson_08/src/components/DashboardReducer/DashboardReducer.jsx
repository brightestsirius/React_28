import React, { useReducer } from "react";

import ListReducer from "../ListReducer/ListReducer";
import ColorPickerReducer from "../ColorPickerReducer/ColorPickerReducer";

import ListReducerContext from "./../../contexts/ListReducerContext";

import {
  reducer as colorReducer,
  initialArg as colorInitialArg,
} from "../../store/color/reducer";

import {
  reducer as todosReducer,
  initialArg as todosInitialArg,
} from "../../store/todos/reducer";

export default function DashboardReducer() {
  const [colorState, colorDispatch] = useReducer(colorReducer, colorInitialArg);
  const [todosState, todoDispatch] = useReducer(todosReducer, todosInitialArg);

  const state = Object.assign({}, colorState, todosState);

  return (
    <ListReducerContext.Provider value={{ state, colorDispatch, todoDispatch }}>
      <ColorPickerReducer />
      <ListReducer />
    </ListReducerContext.Provider>
  );
}
