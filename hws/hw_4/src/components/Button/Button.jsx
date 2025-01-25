import React from "react";

export default function Button({ title, handleClick }) {
  return (
    <button className="battle__btn" onClick={handleClick}>
      {title}
    </button>
  );
}
