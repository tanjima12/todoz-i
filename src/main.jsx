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
import TaskStatus from "./Component/Dashboard/TaskStatus";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
      {
        path: "/taskStatus",
        element: <TaskStatus></TaskStatus>,
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
      fetch(`https://todoz-i-server.vercel.app/updateTodo/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </DndProvider>
);
