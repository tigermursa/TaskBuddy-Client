import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { NavLink } from "react-router-dom";

interface FormData {
  name: string;
  userImage: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData] = useLoginMutation();

  const onSubmit = async (data: FormData) => {
    try {
      await addData(data);
      console.log("Data added successfully!");
      console.log(data);
      reset();
    } catch (error) {
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
