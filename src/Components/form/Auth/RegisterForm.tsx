import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { RegistrationFormData } from "../../../types/taskTypes";
import { useState } from "react";
import { setToLocalStorage } from "../../../utils/local-storage";

export type LoginFormData = {
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormData>();
  const navigate = useNavigate();
  const [addData] = useRegisterMutation();
  const [addLoginData] = useLoginMutation();
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading status

  const saveImage = async () => {
    if (image) {
      setIsLoading(true); // Set loading to true when image upload starts
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "taskBuddy");
      data.append("cloud_name", "dvwmhlyd6");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvwmhlyd6/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const cloudData = await res.json();
        setUrl(cloudData.url);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading to false when image upload completes
      }
    }
  };

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      await saveImage();
      const formDataWithImageUrl = {
        ...data,
        userImage: url,
      };

      const response = await addData(formDataWithImageUrl);
      if ("data" in response && response.data.success) {
        console.log(response.data.data.password);
        console.log(response.data.data.email);
        // loginData = {email:response.data.data.email.password:response.data.data.password}
        toast.success(response.data.message);
        const result = await addLoginData({
          email: response.data.data.email,
          password: response.data.data.password,
        });

        if (result && "data" in result && result.data?.token) {
          setToLocalStorage("token", result.data.token);
          reset();
          navigate("/");
        }
      } else if ("data" in response && response.data.error) {
        toast(response.data.error);
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const renderError = (fieldName: keyof RegistrationFormData) => {
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
      <h1 className="text-2xl">Create Your Account</h1>
      <div className="  max-w-[500px] shadow-xl p-4 rounded-lg border mt-5">
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
              Image
            </label>
            <div>
              <input
                type="file"
                id="userImage"
                onChange={(e) => setImage(e.target.files?.item(0) || null)}
                className="mt-1 p-2 border rounded-md w-full"
              />
              {renderError("userImage")}
            </div>
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
            <button type="submit" className="btn-optional" disabled={isLoading}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
