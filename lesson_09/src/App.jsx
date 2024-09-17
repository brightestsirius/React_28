import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// 🔴🟢

import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import UsersRoute from "./routes/UsersRoute";
import UserRoute from './routes/UserRoute'
import ErrorRoute from "./routes/ErrorRoute";

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
      {
        path: "/users/taras/ukraine",
        element: <div>Taras from Ukraine</div>,
      },
      {
        path: "/users/:userName/:userCountry",
        element: <div>userName from userCountry</div>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}