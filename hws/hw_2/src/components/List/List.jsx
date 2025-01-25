import React, { useState, useEffect } from "react";
import './style.sass'

import {getRandomInt} from '../../utils/script'
import {animals} from './../../mockedData/mockedData'

export default function List() {
  const [list, setList] = useState(animals);

  useEffect(() => {
    const intervalId = setInterval(() => {
        const nonActive = list.filter(item => !item.active);
        if(!nonActive.length){
          clearInterval(intervalId);
          return;
        }

        const getRandonIndex = getRandomInt(0, nonActive.length);
        const randomItem = nonActive[getRandonIndex];

        console.log("Random item", randomItem);
        
        setList(list.map((item) => {
            if(item === randomItem) item.active = true;
            return item;
        }))
    }, 1000)
  }, [])

  return list.length ? (
    <table>
      <tbody>
        {list.map((item, index) => (
          <tr className={item.active ? `active` : ``} key={index}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}
