import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import LoginPage from "./pages/login.jsx";
import UsersPage from "./pages/users/users.jsx";
import RegisterPage from "./pages/register.jsx";
import BooksPage from "./pages/books.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./components/todo/todoApp.jsx";
import ErrorPages from "./pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
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
        path: "/books",
        element: <BooksPage />,
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
  //StrictMode disabled to avoid useEffect run twice in dev mode
  // <React.StrictMode>
    <RouterProvider router={router} />
);
