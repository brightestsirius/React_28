import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import UsersSort from './../components/UsersSort/UsersSort'

import HomeContext from './../contexts/homeContext'

export default function HomeRoute() {
  const [sort, setSort] = useState(`ASC`);

  return (
    <div>
      <HomeContext.Provider value={{sort, setSort}}>
        <h3>Home Route</h3>
        <UsersSort />
        <Link to={`/users?sort=${sort}`}>Go to Users</Link>
      </HomeContext.Provider>
    </div>
  )
}