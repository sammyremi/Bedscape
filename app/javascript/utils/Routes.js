import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home, Error } from "../pages";
import { HomeLayout } from "../components";
// import HomeLayout from "../components/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apartments",
        element: <h1>apartments</h1>,
      },
      {
        path: "sign_out",
        element: <h1>sign out</h1>,
      },
      {
        path: "edit/:apartment/:id",
        element: <h1>show page</h1>,
      },
      {
        path: "apartment/:flat",
        element: <h1>flats</h1>,
      },
    ],
  },
]);

export default router;
