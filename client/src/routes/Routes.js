import { 
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Point from "../pages/Point/Point";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/point",
      element: <Point />,
    },
]);

const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default Routes;