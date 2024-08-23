import React, {useState} from "react";
import './style.sass'

export default function StateExample() {
    // state = {counter: 0}
  const [counter, setCounter] = useState(0);
  const [list, setList] = useState([`cat`, `dog`, `lion`]);
  const [users, setUsers] = useState([
    {
        name: `User 1`,
        age: 10
    },
    {
        name: `User 2`,
        age: 20
    },
    {
        name: `User 3`,
        age: 30
    }
  ])

  const handleIncrement = () => {
    setCounter(counter+1);
  };

  const handleRemoveLastItem = () => {
    // list.slice(0, -1) => [`cat`, `dog`];
    setList(list.slice(0, -1));
  }

  const handleAgeIncrement = () => {
    const incrementedUsersAge = [];

    for(let i=0; i<users.length; i++){
        let user = users[i];
        user.age += 1;

        incrementedUsersAge.push(user);
    }

    setUsers(incrementedUsersAge);

    // setUsers(users.map(item => {
    //     item.age += 1;
    //     return item;
    // }));
  }

  const handleAddItem = () => {
    const animal = prompt(`Enter animal`, `frog`);
    setList([...list, animal]);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>+</button>

      <hr></hr>

      <ul>{list.map((item, index) => <li key={index}>{item}</li>)}</ul>
      <button onClick={handleRemoveLastItem}>Remove item</button>
      <button onClick={handleAddItem}>Add item</button>

      <hr></hr>

      <table>
        <tbody>
            {users.map((user, index) => <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
            </tr>)}
        </tbody>
      </table>
      <button onClick={handleAgeIncrement}>Increment age</button>
    </div>
  );
}
