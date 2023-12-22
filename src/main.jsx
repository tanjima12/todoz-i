import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Header/Home";

import LogIn from "./Component/LogIn/LogIn";
import Register from "./Component/LogIn/Register";
import AuthProvider from "./Component/LogIn/AuthProvider";
import PrivateRoute from "./Component/LogIn/PrivateRoute";
import Contact from "./Component/Header/Contact";
import Dashboard from "./Component/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./Component/Dashboard/UpdateTask";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard/updateList/:id",
    element: <UpdateTask></UpdateTask>,
    loader: ({ params }) =>
      fetch(`http://localhost:5007/updateTodo/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
