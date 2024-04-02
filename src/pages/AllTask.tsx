import { useState } from "react";
import AddModal from "../Components/ui/Modals/AddModal/AddModal";
import TaskCard from "../Components/ui/TaskCard/TaskCard";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useGetTaskDataQuery } from "../redux/features/task/taskApi";
import { LoggedIn } from "../utils/isUserLoggedIn";
import Progressbar from "../Components/ui/Progress/Progressbar";
import useComponentWidth from "../hooks/useComponentWidth";
import { Tasks } from "../types/taskTypes";

const AllTask = () => {
  const [open, setOpen] = useState(false);
  //to make blur when side bar opens
  const { componentWidth } = useComponentWidth();
  const { data, isLoading, isError } = useGetTaskDataQuery("");
  const taskData = data?.data.tasks;
  const email = LoggedIn();

  const filteredTasks = taskData?.filter(
    (task: Tasks) => task.email === email?.email
  );

  return (
    <div className={`h-screen ${componentWidth <= 150 ? "blur-phone" : ""}`}>
      <div className="mb-9 flex items-center justify-between ">
        <div className="flex gap-6 items-center">
          <h1 className="ubuntu-bold text-2xl">My All Tasks</h1>
          <Progressbar />
        </div>

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
