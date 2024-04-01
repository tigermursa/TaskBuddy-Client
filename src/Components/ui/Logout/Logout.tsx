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
        <button
          onClick={handleLogout}
          className="text-xs p-1 bg-slate-500 bg-transparent border rounded-md btn-optional w-full truncate"
        >
          Logout
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logout;
