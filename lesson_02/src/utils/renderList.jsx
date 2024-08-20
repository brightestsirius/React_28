const renderItem = (item) => {
  return Array.isArray(item) ? (
    <ul>{item.map((el, i) => <li key={i}>{el}</li>)}</ul>
  ) : (
    item
  );
};

export { renderItem };