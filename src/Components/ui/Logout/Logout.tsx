import { Button } from "antd";
import { useState } from "react";

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
  };
  return (
    <div className=" flex justify-center">
      {isLoggedIn ? (
        <Button
          type="primary"
          onClick={handleLogout}
          className="text-sm p-1  border rounded-md  w-full truncate"
        >
          Logout
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logout;
