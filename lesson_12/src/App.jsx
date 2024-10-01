import React from "react";
import Posts from "./components/Posts/Posts";
import Accordion from './components/Accordion/Accordion'

export default function App() {
  return (
    <>
      <Posts />
      <Accordion title='Testing'><h4>Content</h4></Accordion>
    </>
  );
}
