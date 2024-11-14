import React, { useEffect } from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

import { RouterProvider } from "react-router-dom";
import Browser from "../pages/Browser";


const Body = () => {
  
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser/>,
    },
  ]);

  
  return <RouterProvider router={appRouter}/>
};

export default Body;
