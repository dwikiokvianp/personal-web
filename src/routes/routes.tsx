import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainContent from "../pages/Home/organisms/MainContent";
import Project from "../pages/Project/Project";
import Stack from "../pages/Stacks/Stack";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/stack",
        element: <Stack />,
      },
    ],
  },
]);

export default routes;
