import React, { useContext, useState, useEffect } from "react";

import { RESET_USER_ACTION } from "../../actions/battle";

import BattleContext from "../../contexts/BattleContext";
import Button from "../Button/Button";
import UserStatistics from "./../UserStatistics/UserStatistics";
import UserScoreLabel from "./../UserScoreLabel/UserScoreLabel";

export default function UserCardData({ user }) {
  const { score, restartAction, dispatch } = useContext(BattleContext);

  const [showUserStatistics, setShowUserStatistics] = useState(false);
  const [showUserStatus, setShowUserStatus] = useState(false);

  const resetUser = () => dispatch({ type: RESET_USER_ACTION, payload: user });

  useEffect(() => {
    if (score && score.length) {
      setShowUserStatistics(true);
      setShowUserStatus(true);
    }
  }, [score]);

  useEffect(() => {
    if(restartAction){
      setShowUserStatistics(false);
      setShowUserStatus(false);
    }
  }, [restartAction])

  return user.data ? (
    <div className="card__data">
      {showUserStatus && <UserScoreLabel user={user} />}

      <img
        className="data__img"
        src={user.data.avatar_url}
        alt={user.data.login}
      />
      <p className="data__title">{user.data.login}</p>

      {showUserStatistics ? (
        <UserStatistics user={user} />
      ) : (
        <Button title={`Reset`} handleClick={resetUser} />
      )}
    </div>
  ) : null;
}
