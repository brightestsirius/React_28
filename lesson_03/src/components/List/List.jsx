import React, { useState, useEffect } from "react";
import './style.sass'

import ListItem from "./ListItem";

// useEffect – 3 lifecycle steps 🟢🧡🔴
// 🟢 component­Did­Mount – borned - useEffect(()=>{}, [])
// 🧡 component­DidUpdate - useEffect(()=>{}, [VARIABLE FROM STATE])

// 🔴 componentWillUnmount – will dying

export default function List() {
  const [list, setList] = useState([`cat`, `dog`, `lion`]);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderMyColor, setBorderColor] = useState();
  const [borderStyle, setBorderStyle] = useState();

  useEffect(function(){
    console.log(`🟢 in 1 useEffect for component­Did­Mount`);
    
    const timeoutId = setTimeout(() => {
        console.log(`in setTimeout`, timeoutId);
        setList(list.slice(0, -1));
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(`🟢 in 2 useEffect for component­Did­Mount – connection to service`);
  }, []); 

  useEffect(() => {
    console.log(`🟢🧡 in useEffect for list`, list);

    if(list.length === 2){
        setBorderWidth(`1px`);
        setBorderColor(`orange`);
    }

    if(list.length === 1){
        setBorderWidth(`3px`);
        setBorderColor(`red`);
    }
  }, [list]);

  useEffect(() => {
    console.log(`🟢🧡 in useEffect for borderMyColor`, borderMyColor);
    if(borderMyColor === `red`) setBorderStyle(`dashed`);
  }, [borderMyColor])

  useEffect(() => {
    console.log(`🟢🧡 in useEffect for borderStyle`, borderStyle);
  }, [borderStyle])

  const handleRemoveLastItem = () => {
    setList(list.slice(0, -1))
  };

  return list.length ? (
    <>
      <ul className="list" style={{borderWidth, borderColor: borderMyColor, borderStyle}}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
      <button onClick={handleRemoveLastItem}>Remove item</button>
    </>
  ) : null;
}
