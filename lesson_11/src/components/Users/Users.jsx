import React, { useRef } from "react";

import {
  useGetUsersQuery,
  useAddUserMutation,
} from "./../../store/services/users";

export default function Users() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addUser, result] = useAddUserMutation()

  const inputRef = useRef();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = inputRef.current.value;
    await addUser({ name: userName }).unwrap();
    formRef.current.reset();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button>Add user</button>
      </form>
      {users.length ? (
        <ul>
          {users.map((item) => (
            <li key={item.id} style={{ color: item.admin ? `green` : `black` }}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
