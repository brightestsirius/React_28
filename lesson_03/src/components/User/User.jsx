import React, { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState({
    name: `Taras`,
    email: `taras@gmail.com`,
  });

  useEffect(() => {
    console.log(`in useEffect`, user.email);
    console.log(`Connection for user ${user.email}`);

    return () => {
        console.log(`in componentWillUnmount for user`);
        console.log(`Disconnection for user ${user.email}`);
    }
  }, [user]);

  const handleChangeEmail = () => {
    const email = prompt(`Enter new email`, `lesya@gmail.com`);
    setUser(prevState => ({...prevState, email}));
  }

  return Object.keys(user).length ? (
    <>
    <ul>
      {Object.keys(user).map((key, index) => (
        <li key={index}>
          {key}: {user[key]}
        </li>
      ))}
    </ul>
    <button onClick={handleChangeEmail}>Change email</button>
    </>
  ) : null;
}
