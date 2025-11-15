import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Transitions } from "../theme/transitions";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: Transitions.component(<AboutPage />),
      },
      {
        path: "/about",
        element: Transitions.component(<AboutPage />),
      },
      {
        path: "/contact",
        element: Transitions.component(<ContactPage />),
      },
    ],
  },
]);

export const RouterApp = {
  router: routerApp,
};
