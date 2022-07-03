import * as React from "react";
import { useRoutes } from "react-router-dom";
import AddWorker from "../addworker";
import AddShoes from "../addshoes";
import HomePage from "../home";

function AppRoute() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "addworker",
      element: <AddWorker />,
    },
    {
      path: "addshoes",
      element: <AddShoes />
    },
  ]);

  return element;
}

export default AppRoute;