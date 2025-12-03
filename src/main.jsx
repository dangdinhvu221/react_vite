import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import LoginPage from "./pages/login.jsx";
import UsersPage from "./pages/users.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductsPage from "./pages/products.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./components/todo/todoApp.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
