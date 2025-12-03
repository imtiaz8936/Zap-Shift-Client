import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/Root/RootLayout";
import Home from "../../Pages/HomePage/Home/Home";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Register from "../../Pages/Auth/Register/Register";
import Coverage from "../../Pages/Coverage/Coverage";
import Signin from "../../Pages/Auth/Signin/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
]);
