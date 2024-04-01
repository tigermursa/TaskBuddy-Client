import { useState } from "react";

import {
  DeleteOutlined,
  FormatPainterOutlined,
  StarOutlined,
} from "@ant-design/icons";

import loader from "../../../assets/images/Ellipsis@1x-1.0s-200px-200px.svg";
import {
  useDeleteTaskMutation,
  useGetTaskDataQuery,
} from "../../../redux/features/task/taskApi";
import UpdateModal from "../Modals/UpdateModal/UpdateModal";
import AddTaskCard from "../AddTaskCard/AddTaskCard";
import { Tasks } from "../../../types/taskTypes";
import { toast, Toaster } from "react-hot-toast";


const notify = () => toast("Here is your toast.");

const TaskCard = () => {
  // Data getting hook from rtk query
  const { data, isLoading, isError } = useGetTaskDataQuery("");
  // DELETE hook from rtk query
  const [deleteThis] = useDeleteTaskMutation();
  // MODAL STATE
  const [open, setOpen] = useState(false);
  //task state
  const [selectedTask, setSelectedTask] = useState<Tasks | null>(null);

  // Error handling from redux and loader
  if (isLoading) {
    return (
      <div className="">
        <img className="w-10" src={loader} alt="loading" />
      </div>
    );
  } else if (isError) {
    return (
      <div className="flex h-screen justify-center  text-red-500 text-xl font-extrabold font-mono">
        <p className="flex  gap-2">ERROR! SOMETHING WENT WRONG !</p>
      </div>
    );
  }

  // Ensure data is available and tasks array exists
  const tasks = data?.data?.tasks || [];

  // TODO: HAVE TO ADD CONFIRMATION BEFORE DELETE
  const deleteData = (id: string) => {
    const options = {
      id: id,
    };

    deleteThis(options);
  };

  // Function to handle update button click
  const handleUpdateClick = (task:Tasks) => {
    setSelectedTask(task);
    // console.log(task); success✔
    setOpen(true);
  };

  return (
    <>
      <div className="grid gap-4 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      <Toaster />
        {tasks?.map((task: Tasks) => (
          <div key={task._id} className="relative">
            <div className="border max-w-[20rem] h-[11rem] lg:max-w-[24rem] p-4 rounded-md shadow-md shadow-gray-600">
              <div>
                <div className="flex justify-between items-center ">
                  <h1 className=" text-lg md:text-xl font-semibold truncate">
                    {task.title}
                  </h1>
                </div>

                <p className=" text-xs text-gray-700 mb-5 mt-2 truncate">
                  {task.description}
                </p>

                <div className="">
                  <div>
                    <h3 className="font-semibold mb-3">
                      Deadline: {task.deadline}
                    </h3>
                    {/* <button className="button-primary ">Completed</button> */}
                    <div className="flex justify-between  w-[900]">
                      <button className="button-secondary ">Incomplete</button>
                      <div className="flex gap-4 text-xl">
                        {/* Update button */}
                        <button className="hover:text-green-600">
                          <FormatPainterOutlined
                            onClick={() => handleUpdateClick(task)}
                          />
                        </button>
                        {/* delete button */}
                        <button className="hover:text-red-600">
                          <DeleteOutlined
                            onClick={() => deleteData(task._id)}
                          />
                        </button>
                        <button  className="hover:text-red-600 text-orange-300 ">
                          <StarOutlined  onClick={notify} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Category tag positioned in top-right corner */}
            <div className="absolute -top-6 -left-5 mt-2 mr-2 z-20">
              <h1 className="border bg-red-600 p-1 pe-2 ps-2 rounded-md text-gray-100 text-xs">
                {task.category}
              </h1>
            </div>
          </div>
        ))}
        {/* Placeholder for AddTaskCard to maintain grid layout */}
        <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-4" />
        <AddTaskCard />
      </div>
      <UpdateModal open={open} setOpen={setOpen} selectedTask={selectedTask} />
    </>
  );
};

export default TaskCard;
