import React, { useState, useEffect } from "react";

// useEffect – 3 lifecycle steps 🟢🟠🔴
// 🟢 component­Did­Mount – borned - useEffect(()=>{}, [])
// 🟠 component­DidUpdate - useEffect(()=>{}, [VARIABLE FROM STATE])
// 🔴 componentWillUnmount – will die now

export default function List() {
  const [list, setList] = useState([`cat`, `dog`, `lion`, `tiger`, `dragon`]);
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    console.log(`🟢 component­Did­Mount`);

    // const removeItemInterval = setInterval(() => {
    //     console.log(`in interval`);
    //     setList(prevState => prevState.slice(0, -1));
    // }, 1000);

    // setIntervalId(removeItemInterval);

    // service connection

    return () => {
        console.log(`🔴 componentWillUnmount – YOU NEED TO CLEAR INTERVAL NOW!`);
        //clearInterval(removeItemInterval);
        // service connection stop
      };
  }, []);

  useEffect(() => {
    console.log(`🟠 component­DidUpdate in useEffect for list`, list); // [`cat`, `dog`, `lion`, `tiger`, `dragon`]
    //if(!list.length) clearInterval(intervalId);

    return () => {
        console.log(`🔴 componentWillUnmount – in useEffect list`, list); // [`cat`, `dog`, `lion`, `tiger`, `dragon`]
        //clearInterval(intervalId);
    }
  }, [list]);

  const handleLastItemRemove = () => {
    setList(prevState => prevState.slice(0, -1));
  }

  return list.length ? (
    <>
        <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <button onClick={handleLastItemRemove}>Delete last item</button>
    </>
  ) : null;
}