import React from 'react'

import UsersList from './../components/UsersList/UsersList'
import NavigateBtn from '../components/NavigateBtn/NavigateBtn'

export default function UsersRoute() {
  return (
    <div>
      <h3>Users Route</h3>

      <UsersList />
      <NavigateBtn title={`Go Home`} path={`/`} />
    </div>
  )
}