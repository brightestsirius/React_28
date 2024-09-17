import React, { useContext } from "react";

import HomeContext from "../../contexts/homeContext";

export default function UsersSort() {
  const { sort, setSort } = useContext(HomeContext);

  const handleSort = (e) => setSort(e.target.value);
  return (
    <div>
      <label>
      Sort user:{" "}
      <select onChange={handleSort} defaultValue={sort}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </label>
    </div>
  );
}
