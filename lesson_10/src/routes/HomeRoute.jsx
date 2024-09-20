import React, { useContext } from "react";

import Select from "./../components/Select/Select";
import RedirectBtn from "./../components/RedirectBtn/RedirectBtn";

import AppContext from "../contexts/AppContext";

export default function HomeRoute() {
  const { sortUsers } = useContext(AppContext);

  return (
    <div>
      <h3>Home Route</h3>

      <Select />
      <br />
      <RedirectBtn
        title={"Redirect to Users List"}
        path={`/users?sort=${sortUsers}`}
      />
    </div>
  );
}
