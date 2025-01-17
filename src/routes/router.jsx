import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./ROUTES";
import RootLayout from "../components/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Stack from "../pages/Stack";
import Contact from "../pages/Contact";

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
      {
        path: ROUTES.WORK,
        element: <Work />,
      },
      {
        path: ROUTES.STACK,
        element: <Stack />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
