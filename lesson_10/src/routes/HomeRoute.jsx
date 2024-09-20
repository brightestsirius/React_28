import React, {useContext} from 'react'

import SelectUsersSort from './../components/SelectUsersSort/SelectUsersSort'
import NavigateBtn from './../components/NavigateBtn/NavigateBtn'

import AppContext from '../contexts/AppContext'

export default function HomeRoute() {
    const {sortUsers} = useContext(AppContext);

  return (
    <div>
        <h3>Home Route</h3>

        <SelectUsersSort />
        <br /><br />
        <NavigateBtn title={`Go to User List Route and sort by ${sortUsers}`} path={`/users?sort=${sortUsers}`} />
    </div>
  )
}
