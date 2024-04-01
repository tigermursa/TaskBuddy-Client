import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import { setToLocalStorage } from "../../../utils/local-storage";

interface FormData {
  email: string;
  password: string;
}

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
        console.log(response.data.message);
        reset();
        setToLocalStorage("token", response.data.token);
        navigate("/");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if ("error" in error) {
        console.log(error.error.status, error.error.message);
      } else {
        console.error("Error adding data");
      }
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
      <h1 className="text-2xl">Login your Account</h1>
      <div className=" w-[500px] shadow-xl p-4 rounded-lg  mt-5 border ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
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
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
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
