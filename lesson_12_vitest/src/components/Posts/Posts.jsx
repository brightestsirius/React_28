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

  const inputRef = useRef();
  const formRef = useRef();

  const handleItemUpdate = (item) =>
    updatePost({ ...item, completed: !item.completed });

  const handleSubmit = async e => {
    e.preventDefault();

    const title = inputRef.current.value;
    await addPost({title}).unwrap();
    
    formRef.current.reset();
  }

  if (error) return <p>Error: {error}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
    <form ref={formRef} onSubmit={handleSubmit}>
        <label>
            Post title: <input type="text" ref={inputRef} />
        </label>
        <button>Add post</button>
    </form>

      {data.length ? (
        <ul>
          {data.map((item) => (
            <li
              style={{ color: item.completed ? `crimson` : `` }}
              key={item.id}
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
