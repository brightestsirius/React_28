import React, { useContext, memo } from "react";

import { LIST_FILTER } from "../../constants/list";

import ListContext from "../../contexts/ListContext";

export default memo(function Filter() {
  const { filter, setFilter } = useContext(ListContext);

  const handleChange = (e) => setFilter(e.target.value);

  return (
    <label>
      Filter:{" "}
      <select defaultValue={filter} onChange={handleChange}>
        {LIST_FILTER.map((item, index) => (
          <option key={index} value={item.key}>
            {item.title}
          </option>
        ))}
      </select>
    </label>
  );
});
