import React, {useState, useEffect} from 'react'
// hooks

export default function List() {
    const [list, setList] = useState([`cat`, `dog`, `lion`]);
    const [color, setColor] = useState(`green`);

    // useEffect(function(){}, [])
    // useEffect(function(){})

    useEffect(() => {
        console.log(`in useEffect`);

        setTimeout(() => {
            // setList(list.filter((item, index) => index !== list.length-1));
            
            // list.slice(); // [`cat`, `dog`, `lion`]
            // list.slice(1); // [`dog`, `lion`]
            // list.slice(0,1); // [`cat`]
            // list.slice(0,2); // [`cat`, `dog`]
            // list.slice(0, -1); // [`cat`, `dog`]
            // list.slice(0, -2); // [`cat`]

            setList(list.slice(0, -1));
        }, 1000);
    }, [])

  return list.length ? <ul style={ {color} }>
    {
        list.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul> : null;
}

// state = {
//     list: [`cat`, `dog`, `lion`],
        // color: `green`
// }