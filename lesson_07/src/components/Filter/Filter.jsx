import React, { useState, useEffect, memo } from "react";

import { LIST_FILTER, LIST_FILTER_ALL } from "../../constants/list";

import useLocalStorage from './../../hooks/useLocalStorage';

export default memo(function Filter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage(`filter`, LIST_FILTER_ALL);

  const handleChange = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

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
