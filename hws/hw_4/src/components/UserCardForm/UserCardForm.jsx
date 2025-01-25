import React, { useRef, useContext } from "react";

import service from "./../../service/githubUsers";

import BattleContext from "../../contexts/BattleContext";
import Button from './../Button/Button'

import { SET_USER_DATA_ACTION } from "../../actions/battle";

export default function UserCardForm({ user, index }) {
  const { dispatch } = useContext(BattleContext);

  const inputRef = useRef();
  const labelRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    labelRef.current.classList.contains(`form__label--error`) &&
      labelRef.current.classList.remove(`form__label--error`);

    const username = inputRef.current.value;

    try {
      const response = await service.getUser(username);
      dispatch({ type: SET_USER_DATA_ACTION, payload: {...user, data: response} });
    } catch (err) {
      console.log(err);
      labelRef.current.classList.add(`form__label--error`);
    }
  };

  return (
    <form className="card__form" onSubmit={handleSubmit}>
      <label ref={labelRef} className="form__label">
        <p className="label__title">
          Choose <b>Player {index}</b> username:
        </p>
        <input
          ref={inputRef}
          required
          type="text"
          className="label__input"
          placeholder={`Player ${index}`}
          defaultValue={user.username}
        />
        <p className="label__error">Username not exist</p>
      </label>
      <Button title={`Submit`} />
    </form>
  );
}
