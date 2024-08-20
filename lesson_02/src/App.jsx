import React from "react";

import ListRender from "./components/ListRender/ListRender";
import ObjectRender from './components/ObjectRender/ObjectRender'
import List from './components/List/List'

import { list } from "./mockedData/mockedData";

export default function App() {
  const analyticListFirst = true;
  const analyticListSecond = true;

  return (
    <>
      {/* {analyticListFirst && <ListRender list={list} />}
      <ObjectRender />
      {analyticListSecond && <ListRender />} */}

      <List />
    </>
  );
}
