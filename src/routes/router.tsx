import { createBrowserRouter } from "react-router-dom";
import AllTask from "../pages/AllTask";
import App from "../App";
import RegisterForm from "../Components/form/Auth/RegisterForm";
import LoginForm from "../Components/form/Auth/LoginForm";
import ProtectedRouteProvider from "../lib/Provider/ProtectedRouteProvider";
import NotFoundPage from "../pages/NotFoundPage";
import Complete from "../pages/BlurEffectPages/Complete";
import Important from "../pages/BlurEffectPages/Important";
import Incomplete from "../pages/BlurEffectPages/Incomplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouteProvider>
        <App />
      </ProtectedRouteProvider>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: <AllTask />,
      },
      {
        path: "/completed",
        element: <Complete />,
      },
      {
        path: "/important",
        element: <Important />,
      },
      {
        path: "/incomplete",
        element: <Incomplete />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);

export default router;
