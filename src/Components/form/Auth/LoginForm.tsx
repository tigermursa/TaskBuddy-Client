import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import { setToLocalStorage } from "../../../utils/local-storage";
import toast, { Toaster } from "react-hot-toast";
import { FormData } from "../../../types/taskTypes";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData] = useLoginMutation();
  //show and hide password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = async (data: FormData) => {
    try {
      const response = await addData(data);
      if ("data" in response && response.data.success) {
        setToLocalStorage("token", response.data.token);
        toast.success(response.data.message);
        reset();
        navigate("/");
        // toast.success(response.data.message);
      } else if ("error" in response && response.error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((response.error as { data: any }).data.message);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error adding data:", error);
    }
  };

  const renderError = (fieldName: keyof FormData) => {
    if (errors[fieldName]?.type === "required") {
      return <p className="text-red-500">{`${fieldName} is required`}</p>;
    }
    if (errors[fieldName]?.type === "min") {
      return <p className="text-red-500">{errors[fieldName]?.message}</p>;
    }
    return null;
  };

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center ">
      <Toaster />
      <div className=" w-[330px] shadow-xl p-4 rounded-lg  mt-5   ">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex justify-center items-center mb-4">
            <img
              className="w-8"
              src="https://user-images.githubusercontent.com/69080584/119517399-c6f10280-bda1-11eb-9af9-4bdc197dcd65.png"
              alt=""
            />
            <h1>
              Task <span className="text-blue-600">B</span>uddy
            </h1>
          </div>
          <div>
            <h1 className="text-lg">Login your Account</h1>
          </div>
          <div className="mb-4 pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              defaultValue={"demo@gmail.com"}
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {renderError("email")}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue={"A@123456"}
                id="password"
                {...register("password")}
                className="mt-1 p-2 border rounded-md w-full"
              />
              <button
                type="button"
                className="absolute top-2 right-3 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEyeSlash className="mt-2" />
                ) : (
                  <FaRegEye className="mt-2" />
                )}
              </button>
            </div>
            {renderError("password")}
          </div>
          <div className="flex text-xs gap-2 text-blue-600">
            <p className="text-gray-600">Don't have an Account ?</p>
            <NavLink to={"/register"}>Register</NavLink>
          </div>
          <div className="mt-6 flex justify-center">
            <button onClick={() => toast} type="submit" className="btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
