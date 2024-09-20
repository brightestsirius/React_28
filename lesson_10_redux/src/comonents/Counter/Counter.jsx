import React, {useRef} from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount, setColor } from "../../store/features/counter/slice";

export default function Counter() {
  const { value, color } = useSelector((state) => state.counter); // counter = {value: 0, color: `green`};
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(incrementByAmount(+inputRef.current.value));
  }

  const handleChangeColor = e => dispatch(setColor(e.target.value));

  return (
    <div style={{ color }}>
      <button onClick={handleDecrement}>-</button>
      <b>{value}</b>
      <button onClick={handleIncrement}>+</button>
      
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button>Add value</button>
      </form>

      <input type="color" defaultValue={color} onChange={handleChangeColor} />

    </div>
  );
}
