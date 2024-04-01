import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRouteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default ProtectedRouteProvider;
