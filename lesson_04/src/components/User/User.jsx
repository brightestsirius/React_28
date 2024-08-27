import React, { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState({
    name: `Taras`,
    email: `taras@gmail.com`,
    age: 100,
    country: `Ukraine`,
  });


  useEffect(() => {
    console.log(`in 🟠 component­DidUpdate for user ${user.email} – connect to gmail`);

    return () => {
        console.log(`in 🔴 callback for useEffect for ${user.email} – disconnect to gmail`);
    }
  }, [user]);

  const handleChangeEmail = () => {
    const email = prompt(`Enter new email`);
    setUser(prevState => ({...prevState, email}));
  }

  return (
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
  );
}
