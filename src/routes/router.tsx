import { createBrowserRouter } from "react-router-dom";
import AllTask from "../pages/AllTask";
import CompleteTask from "../pages/CompleteTask";
import App from "../App";
import RegisterForm from "../Components/form/Auth/RegisterForm";
import LoginForm from "../Components/form/Auth/LoginForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <AllTask />,
      },
      {
        path: "/completed",
        element: <CompleteTask />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);

export default router;
