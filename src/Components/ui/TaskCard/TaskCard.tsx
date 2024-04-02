import { useState } from "react";
import {
  ClockCircleOutlined,
  DeleteOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import loader from "../../../assets/images/Ellipsis@1x-1.0s-200px-200px.svg";
import {
  useDeleteTaskMutation,
  useImportantMutation,
  useStatusMutation,
} from "../../../redux/features/task/taskApi";
import UpdateModal from "../Modals/UpdateModal/UpdateModal";
import AddTaskCard from "../AddTaskCard/AddTaskCard";
import { TaskDataProps, Tasks } from "../../../types/taskTypes";
import { toast, Toaster } from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";

import { Pagination, Tooltip } from "antd";
import ViewDetailsModal from "../Modals/ViewDetails/ViewDetailsModal";

const TaskCard: React.FC<TaskDataProps> = ({ data, isLoading, isError }) => {
  const [deleteThis] = useDeleteTaskMutation();
  const [importantThis] = useImportantMutation();
  const [completeThis] = useStatusMutation();
  const [open, setOpen] = useState(false);
  const [openTaskDetails, setOpenTaskDetails] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Tasks | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // Changed default page to 1
  const perPage = 7; // Change this according to your desired items per page

  const color = ["purple"];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="">
        <img className="w-10" src={loader} alt="loading" />
      </div>
    );
  } else if (isError) {
    return (
      <div className="flex h-screen justify-center  text-red-500 text-xl font-extrabold font-mono">
        Error fetching data
      </div>
    );
  }

  //delete function
  const deleteData = async (id: string) => {
    const options = {
      id: id,
    };

    const response = await deleteThis(options);
    if ("data" in response && response.data.success) {
      toast(response.data.message);
    }
  };

  //important
  const makeImportant = async (id: string) => {
    const options = {
      id: id,
    };

    importantThis(options);
  };

  //task complete
  const complete = async (id: string) => {
    const options = {
      id: id,
    };

    completeThis(options);
  };

  const handleUpdateClick = (task: Tasks) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleTaskViewClick = (task: Tasks) => {
    setSelectedTask(task);
    setOpenTaskDetails(true);
  };

  const offset = (currentPage - 1) * perPage;
  const currentPageData = data.slice(offset, offset + perPage);

  return (
    <>
      <div className="grid gap-4 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <Toaster />
        {currentPageData.map((task: Tasks) => (
          <div
            key={task._id}
            onClick={() => handleTaskViewClick(task)}
            className="relative cursor-pointer"
          >
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
                    <h3 className="font-semibold   mb-3">
                      <ClockCircleOutlined className="me-1" />

                      {task?.deadline
                        ? new Date(task.deadline).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                          })
                        : ""}
                    </h3>
                    <div className="flex justify-between  w-[900]">
                      {task.status ? (
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            complete(task._id);
                          }}
                          className={"btn-primary "}
                        >
                          Complete
                        </button>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            complete(task._id);
                          }}
                          className="btn-secondary "
                        >
                          Incomplete
                        </button>
                      )}

                      <div className="flex gap-4 text-xl items-center  ms-2 me-1  justify-center p-1 ">
                        <button className="hover:text-green-600 ">
                          <FormatPainterOutlined
                            onClick={(event) => {
                              event.stopPropagation();
                              handleUpdateClick(task);
                            }}
                          />
                        </button>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            deleteData(task._id);
                          }}
                          className="hover:text-red-600"
                        >
                          <DeleteOutlined />
                        </button>
                        {task.isImportant ? (
                          <Tooltip
                            title="Important Task"
                            color={color[0]}
                            key={color[0]}
                          >
                            <button className="text-orange-400 hover:text-orange-300">
                              <FaStar
                                onClick={(event) => {
                                  event.stopPropagation();
                                  makeImportant(task._id);
                                }}
                              />
                            </button>
                          </Tooltip>
                        ) : (
                          <Tooltip
                            title="Important Task"
                            color={color[0]}
                            key={color[0]}
                          >
                            <button>
                              <FaRegStar
                                className="text-orange-400 hover:text-orange-300"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  makeImportant(task._id);
                                }}
                              />
                            </button>
                          </Tooltip>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-5 mt-2 mr-2 z-20">
              <h1
                className={`border p-1 pe-2 ps-2 rounded-md text-gray-100 text-xs ${
                  task.category === "personal"
                    ? "bg-blue-600"
                    : task.category === "family"
                    ? "bg-purple-600"
                    : task.category === "official"
                    ? "bg-red-600"
                    : ""
                }`}
              >
                {task.category}
              </h1>
            </div>
          </div>
        ))}
        <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-4" />
        <AddTaskCard />
      </div>
      <div className=" mt-20 pb-20 text-center">
        <Pagination
          className=""
          defaultCurrent={1}
          total={data.length}
          pageSize={perPage}
          current={currentPage}
          onChange={handlePageChange}
        />
      </div>

      <UpdateModal open={open} setOpen={setOpen} selectedTask={selectedTask} />
      <ViewDetailsModal
        open={openTaskDetails}
        setOpen={setOpenTaskDetails}
        selectedTask={selectedTask}
      />
    </>
  );
};

export default TaskCard;
