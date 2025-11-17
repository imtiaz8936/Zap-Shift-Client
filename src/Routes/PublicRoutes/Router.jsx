import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layouts/Root/RootLayout";
import Home from "../../Pages/HomePage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
