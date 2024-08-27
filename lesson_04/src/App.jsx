import React, {useState} from "react";

import List from "./components/List/List";
import User from './components/User/User'
import Posts from './components/Posts/Posts'

export default function App() {
  const [showList, setShowList] = useState(true);

  const handleListRemove = () => setShowList(false);

  return (
    <>
      {/* <button onClick={handleListRemove}>Remove List</button>
      {showList && <List />} */}

      {/* <User /> */}

      <Posts />
    </>
  );
}
