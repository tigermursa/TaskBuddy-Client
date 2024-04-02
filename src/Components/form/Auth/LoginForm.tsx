import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import { setToLocalStorage } from "../../../utils/local-storage";
import toast, { Toaster } from "react-hot-toast";
import { FormData } from "../../../types/taskTypes";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData] = useLoginMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await addData(data);
      if ("data" in response && response.data.success) {
        setToLocalStorage("token", response.data.token);
        toast(response.data.message);
        reset();
        navigate("/");
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
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <Toaster />
      <h1 className="text-2xl">Login your Account</h1>
      <div className=" max-w-[500px] shadow-xl p-4 rounded-lg  mt-5 border ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              defaultValue={"mursalin@gmail.com"}
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
            <input
              defaultValue={"123456"}
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {renderError("password")}
          </div>
          <div className="flex text-xs gap-2 text-blue-600">
            <p className="text-gray-600">Don't have an Account ?</p>
            <NavLink to={"/register"}>Register</NavLink>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => toast}
              type="submit"
              className="btn-optional"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
