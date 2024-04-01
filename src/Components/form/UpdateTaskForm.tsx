import { useForm } from "react-hook-form";
import { useUpdateTaskMutation } from "../../redux/features/task/taskApi";
import { Tasks } from "../../types/taskTypes";
import { toast, Toaster } from "react-hot-toast";
interface FormData {
  title: string;
  description: string;
  deadline: string;
  category: "personal" | "official" | "family";
}

interface AddModalProps {
  setOpen: (open: boolean) => void;
  defaultValues: Tasks | null;
}
const UpdateTaskForm: React.FC<AddModalProps> = ({
  setOpen,
  defaultValues,
}) => {
  // const { data } = useGetTaskDataQuery(id);

  //console.log("from update form", defaultValues); //success✔

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [updateData, { isLoading }] = useUpdateTaskMutation();
  const id = defaultValues?._id;
  const onSubmit = async (data: FormData) => {
    try {
      const response = await updateData({ id, data });
      if ("data" in response && response.data.success) {
        setOpen(false);
        toast(response.data.message);
      } else if ("data" in response && response.data.error) {
        toast(response.data.error);
      }
    } catch (error) {
      console.error("Update failed:", error);
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
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mt-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            defaultValue={defaultValues?.title}
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
            defaultValue={defaultValues?.category}
            {...register("category", { required: true })}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="">{defaultValues?.category}</option>
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
            defaultValue={defaultValues?.description}
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
            defaultValue={defaultValues?.deadline}
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
            {isLoading ? "Updating..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
