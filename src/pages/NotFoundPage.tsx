import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-10">
        The page you are looking for does not exist.
      </p>
      <NavLink to={"/"}>
        <button className="btn-optional ">Go to Home</button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
