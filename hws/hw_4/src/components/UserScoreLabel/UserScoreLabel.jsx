import React, { useContext } from "react";

import BattleContext from "../../contexts/BattleContext";

export default function UserScoreLabel({ user }) {
  const { score } = useContext(BattleContext);

  const scoreResult = () => {
    let index = score.findIndex((item) => item.id === user.id);
    return index === 0 ? `Winner!` : `Loser ${++index}/${score.length}`;
  };

  return <p className="score__label">{scoreResult()}</p>;
}
