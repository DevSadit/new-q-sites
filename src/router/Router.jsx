import { createBrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/home/Home";
import Root from "../Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      
    ],
  },
]);

export default router;
