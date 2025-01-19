import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import RootLayout from "../components/shared/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
    ],
  },
]);

export default router;
