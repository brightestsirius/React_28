import React, { useContext } from "react";

import ListReducerContext from "../../contexts/ListReducerContext";

import { SET_COLOR_ACTION } from "./../../store/color/actions";

export default function ColorPickerReducer() {
  const { state, colorDispatch } = useContext(ListReducerContext);

  const handleColorChange = (e) =>
    colorDispatch({ title: SET_COLOR_ACTION, payload: e.target.value });

  return (
    <label>
      Choose color:{" "}
      <input
        type="color"
        defaultValue={state.color}
        onChange={handleColorChange}
      />
    </label>
  );
}
