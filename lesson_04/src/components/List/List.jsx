import React, { useState } from "react";

// useEffect – 3 lifecycle steps 🟢🟠🔴
// 🟢 component­Did­Mount – borned - useEffect(()=>{}, [])
// 🟠 component­DidUpdate - useEffect(()=>{}, [VARIABLE FROM STATE])
// 🔴 componentWillUnmount – will die now

export default function List() {
  const [list, setList] = useState([`cat`, `dog`, `lion`]);

  return list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}