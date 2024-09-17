import React from "react";

import UserCard from "./../components/UserCard/UserCard";
import NavigateBtn from "./../components/NavigateBtn/NavigateBtn";

export default function UserRoute() {
  return (
    <div>
      <h3>User Route</h3>

      <UserCard />
      <NavigateBtn title={"Return to users list"} path={`/users`} />
    </div>
  );
}
