import React, { useContext, memo } from "react";

import ListContext from "../../contexts/ListContext";

export default memo(function ColorPicker() {
  const { color, setColor } = useContext(ListContext);

  const handleChange = (e) => setColor(e.target.value);

  return (
    <label>
      Choose color:{" "}
      <input type="color" defaultValue={color} onChange={handleChange} />
    </label>
  );
});
