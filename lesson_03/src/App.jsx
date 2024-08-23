import React, { useState } from "react";

import List from "./components/List/List";
import User from "./components/User/User";
import Posts from './components/Posts/Posts'

export default function App() {
  const [showList, setShowList] = useState(true);
  const [showUser, setShowUser] = useState(true);

  const handleListRemove = () => setShowList(false);

  const handleUserRemove = () => setShowUser(false);

  return (
    <>
      {/* <button onClick={handleListRemove}>Remove List</button>
      {showList && <List />} */}

      {/* <button onClick={handleUserRemove}>Remove user</button>
      {showUser && <User />} */}

      <Posts />
    </>
  );
}
