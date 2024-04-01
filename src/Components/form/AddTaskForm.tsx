import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../../redux/features/task/taskApi";
import { useEffect, useState } from "react";
import { decodedToken } from "../../utils/jwt";
import { getFromLocalStorage } from "../../utils/local-storage";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  title: string;
  description: string;
  deadline: string;
  email: string;
  category: "personal" | "official" | "family";
}

interface AddModalProps {
  setOpen: (open: boolean) => void;
}

const AddTaskForm: React.FC<AddModalProps> = ({ setOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [addData, { isLoading }] = useAddTaskMutation();
  const [email, setEmail] = useState<string>("");

  // Inside your AddTaskForm component
  useEffect(() => {
    // Retrieve token from local storage
    const token = getFromLocalStorage("token");
    if (token) {
      // Decode token to get email value
      const decoded = decodedToken(token);
      setEmail(decoded.email);
    }
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      // Include email from state
      data.email = email;

      const response = await addData(data);
      //error=response.data.error&message
      //success=response.data.message$success
      if ("data" in response && response.data.success) {
        setOpen(false);
        toast(response.data.message);

        reset();
      } else if ("data" in response && response.data.error) {
        toast(response.data.error);
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
    <div>
      <Toaster/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mt-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {renderError("title")}
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="">Select Category</option>
            <option value="personal">Personal</option>
            <option value="official">Official</option>
            <option value="family">Family</option>
          </select>
          {renderError("category")}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {renderError("description")}
        </div>

        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-600"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            {...register("deadline", {
              required: true,
              min: { value: 0, message: "Deadline must be a positive number" },
            })}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {renderError("deadline")}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
