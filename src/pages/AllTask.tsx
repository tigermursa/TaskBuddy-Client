import { useState } from "react";
import AddModal from "../Components/ui/Modals/AddModal/AddModal";
import TaskCard from "../Components/ui/TaskCard/TaskCard";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useGetTaskDataQuery } from "../redux/features/task/taskApi";
import { LoggedIn } from "../utils/isUserLoggedIn";

const AllTask = () => {
  //  Add MODAL STATE
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useGetTaskDataQuery("");
  const taskData = data?.data.tasks;
  const email = LoggedIn();

  // Filtering tasks based on matching email
  const filteredTasks = taskData?.filter(
    (task: { email: string }) => task.email === email?.email
  );

  return (
    <div className="h-screen">
      <div className="mb-9 flex items-center justify-between ">
        <h1 className="ubuntu-bold text-2xl">My All Tasks</h1>
        <PlusCircleOutlined
          onClick={() => setOpen(true)}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div>
        <TaskCard
          data={filteredTasks}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AllTask;
