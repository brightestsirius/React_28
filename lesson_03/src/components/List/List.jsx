import React, { useState, useEffect } from "react";

import { list as mockedList } from "./../../mockedData/mockedData";

export default function List() {
  const [list, setList] = useState(mockedList);
  const [user, setUser] = useState({
    name: `Taras`,
    age: 100,
    country: `Ukraine`,
  });
  const [intId, setIntId] = useState();
  const [color, setColor] = useState(`black`);
  const [bg, setBg] = useState(`white`);

  useEffect(() => {
    console.log(`in useEffect`);

    // setTimeout(() => {
    //   setList((prevState) => prevState.map((item) => `${item}...`));
    // }, 1000);

    // setTimeout(() => {
    //   setList((prevState) => prevState.map((item) => `${item}!`));
    // }, 1500);

    // setTimeout(() => {
    //     setUser(prevState => ({...prevState, name: `Lesya`}))
    // }, 1000)

    // setTimeout(() => {
    //     setUser(prevState => ({...prevState, age: 20}))
    // }, 1000)

    const intervalId = setInterval(() => {
        setList(prevState => prevState.slice(0, -1));
    }, 1000);

    setIntId(intervalId);

    return () => {
        console.log(`in componentWillUnmout`);
        clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    !list.length && clearInterval(intId);
  }, [list]);

  useEffect(() => {
    if(list.length<=4) setColor(`orange`);
    if(list.length<=2) setColor(`red`);

  }, [list]);

  useEffect(() => {
    if(color === `orange`) setBg(`grey`);
    if(color === `red`) setBg(`black`);
  }, [color])

//   useEffect(() => {
//     console.log(`in basic useEffect`)

//     return () => {
//         console.log(`in return basic useEffect`)
//     }
//   })

  return (
    <>
      {list.length ? (
        <ul style={{color, backgroundColor: bg}}>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
      <hr></hr>
      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>
            {key}: {user[key]}
          </li>
        ))}
      </ul>
    </>
  );
}
