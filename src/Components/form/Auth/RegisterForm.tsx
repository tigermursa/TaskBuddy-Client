import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import { NavLink } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
interface FormData {
  name: string;
  userImage: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData] = useRegisterMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await addData(data);

      if ("data" in response && response.data.success) {
        toast(response.data.message);
        reset();
      } else if ("data" in response && response.data.error) {
        toast(response.data.error);
      }
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
      <Toaster />
      <h1 className="text-2xl">Create Your Account</h1>
      <div className=" w-[500px] shadow-xl p-4 rounded-lg border mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {renderError("name")}
          </div>
          <div className="mb-4">
            <label
              htmlFor="userImage"
              className="block text-sm font-medium text-gray-600"
            >
              User Image
            </label>
            <input
              type="text"
              id="userImage"
              {...register("userImage", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {renderError("userImage")}
          </div>
          <div className="mb-4">
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
            <p className="text-gray-600">Already have Account ?</p>
            <NavLink to={"/login"}>Login</NavLink>
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

export default RegisterForm;
