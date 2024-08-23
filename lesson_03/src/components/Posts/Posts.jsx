import React, { useState, useEffect } from "react";
import './style.sass'

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
        response = await request.json();

      setPosts(response);
    })();
  }, []);

  const handleItemRemove = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: `DELETE`,
      });
      setPosts((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemChange = async (item) => {
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${item.id}`,
        {
          method: `PATCH`,
          body: JSON.stringify({ completed: !item.completed }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const response = await request.json();

      setPosts(prevState => prevState.map((element) => {
        if(element.id === response.id) element = response;
        return element;
      }))
    } catch (err) {
      console.log(err);
    }
  };

  const getClassName = item => {
    const classes = [];

    if(item.completed) classes.push(`item---completed`);

    return classes.join(` `);
  }

  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <li key={item.id} className={getClassName(item)}>
          {item.title}{" "}
          <button onClick={() => handleItemRemove(item.id)}>Remove</button>
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={() => handleItemChange(item)}
          />
        </li>
      ))}
    </ul>
  ) : null;
}
