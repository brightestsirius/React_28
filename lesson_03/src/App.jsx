import React, {useState} from "react";

import StateExample from "./components/StateExample/StateExample";
import List from './components/List/List'

export default function App() {
  const [showList, setShowList] = useState(true);

  const handleListRemove = () => setShowList(!showList);

  return (
    <>
      {/* <StateExample /> */}
      <button onClick={handleListRemove}>Remove List Component</button>
      
      {showList && <List />}
    </>
  );
}
