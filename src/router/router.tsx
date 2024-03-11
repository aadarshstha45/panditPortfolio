import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import Question from "../pages/Question";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/admin",
  //   element: <Question />,
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
