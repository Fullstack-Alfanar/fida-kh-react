import * as React from "react";
import { useRoutes } from "react-router-dom";
import AddWorker from "../addworker";
import AddShoes from "../addshoes";
import HomePage from "../home";
import GetWorkers from "../workers";
import GetShoes from "../shoes"


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
    {
      path: "getworker",
      element: <GetWorkers />
    },
    {
      path: "getshoes",
      element: <GetShoes />
    },
  ]);

  return element;
}

export default AppRoute;