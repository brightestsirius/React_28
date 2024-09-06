import React, { useState, useEffect, memo } from "react";

import { DEFAULT_COLOR } from "./../../constants/list";

import useLocalStorage from "../../hooks/useLocalStorage";

export default memo(function ColorPicker({ liftingColor }) {
  const [color, setColor] = useLocalStorage(`color`, DEFAULT_COLOR);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  const handleChange = (e) => setColor(e.target.value);

  return (
    <label>
      Choose color:{" "}
      <input type="color" defaultValue={color} onChange={handleChange} />
    </label>
  );
});
