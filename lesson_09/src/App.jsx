import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from "./routes/UserRoute";
import ErrorRoute from "./routes/ErrorRoute";

import Layout from "./pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/users",
        element: <UsersRoute />,
      },
      {
        path: "/users/:userId",
        element: <UserRoute />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
