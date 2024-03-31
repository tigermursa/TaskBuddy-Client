import { createBrowserRouter } from "react-router-dom";
import AllTask from "../pages/AllTask";
import CompleteTask from "../pages/CompleteTask";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/all-tasks",
        element: <AllTask />,
      },
      {
        path: "/completed",
        element: <CompleteTask />,
      },
    ]
  },
 
]);

export default router;
