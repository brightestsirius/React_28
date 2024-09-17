import React, { useContext } from "react";

import UserContext from "../../contexts/userContext";

export default function UserStatistics() {
  const { state } = useContext(UserContext);
  return <div>Accessebility: {state.accessebility ? `🟢` : `🔴`}</div>;
}
