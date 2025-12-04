import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/Root/RootLayout";
import Home from "../../Pages/HomePage/Home/Home";
import AuthLayout from "../../Layouts/AuthLayout/AuthLayout";
import Register from "../../Pages/Auth/Register/Register";
import Coverage from "../../Pages/Coverage/Coverage";
import Signin from "../../Pages/Auth/Signin/Signin";
import SendParcel from "../../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <p className="text-4xl text-center">Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
      },
      {
        path: "/send-parcel",
        Component: SendParcel,
        loader: () => fetch("./serviceCenters.json").then((res) => res.json()),
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
