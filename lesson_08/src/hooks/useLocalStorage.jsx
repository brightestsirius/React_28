import React, { useState, useEffect } from "react";

export default function useLocalStorage(name, defaultValue) {
  const [value, setValue] = useState(
    localStorage.getItem(name)
      ? JSON.parse(localStorage.getItem(name))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

// Component Filter => state: [value, setValue]
// const [filter, setFilter] = useLocalStorage(`filter`, LIST_FILTER_ALL);
// const [color, setColor] = useLocalStorage(`color`, DEFAULT_COLOR);
