import React from 'react'

import Todos from './components/Todos/Todos'

export default function App() {
  const liftedNewTodo = item => {
    console.log(`in App`, item);
    
  }
  return (
    <>
      <Todos liftingNewTodoToApp={liftedNewTodo} />
    </>
  )
}