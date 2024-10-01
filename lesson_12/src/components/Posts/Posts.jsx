import React, {useRef} from "react";

import {
  useGetPostsQuery,
  useUpdatePostMutation,
  useAddPostMutation
} from "./../../store/services/posts";

export default function Posts() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [updatePost, updatePostResult] = useUpdatePostMutation();
  const [addPost, addPostResult] = useAddPostMutation();

  const formRef = useRef();
  const inputRef = useRef();

  const handleItemUpdate = (item) =>
    updatePost({ ...item, completed: !item.completed });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = inputRef.current.value;
    await addPost({title}).unwrap();
    formRef.current.reset();
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Add post: <input type="text" ref={inputRef} />
      </label>
      <button>Add</button>
    </form>
      {data.length ? (
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              style={{ color: item.completed ? `crimson` : `` }}
              onClick={() => handleItemUpdate(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
