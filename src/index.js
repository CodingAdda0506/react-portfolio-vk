import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./pages/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  // {
  //   path: "/story",
  //   element: <App />,
  // },
  // {
  //   path: "/about",
  //   element: <App />,
  // },
  // {
  //   path: "/links",
  //   element: <App />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
