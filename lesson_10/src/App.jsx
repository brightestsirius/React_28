import React, { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404 page</div>,
    children: [
      {
        path: `/`,
        element: <HomeRoute />,
      },
      {
        path: `/users`,
        element: <UsersRoute />,
      },
    ],
  },
]);

import AppContext from "./contexts/AppContext";

import { reducer, initArgs } from "./store/users/reducer";

export default function App() {
  const [stateUsers, dispatchUsers] = useReducer(reducer, initArgs);

  return (
    <AppContext.Provider value={{ ...stateUsers, dispatchUsers }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}
