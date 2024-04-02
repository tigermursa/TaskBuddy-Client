import { DeleteOutlined, FormatPainterOutlined } from "@ant-design/icons";
import { useGetTaskDataQuery } from "../redux/features/task/taskApi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Tasks } from "../types/taskTypes";
import { LoggedIn } from "../utils/isUserLoggedIn";

const CompleteTask = () => {
  const TokenData = LoggedIn();
  const email = TokenData.email;

  const { data } = useGetTaskDataQuery("");
  // Filter tasks where status is true
  const completedTasks = data?.data?.tasks.filter(
    (task: Tasks) => task.status && task.email === email
  );

  if (completedTasks?.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center text-lg">
        <p>No complete task yet</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-screen">
        {completedTasks?.map((task: Tasks) => (
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
                    <div className="flex justify-between  w-[900]">
                      {task.status ? (
                        <button
                          //   onClick={() => complete(task._id)}
                          className={"btn-primary"}
                        >
                          Complete
                        </button>
                      ) : (
                        <button
                          //   onClick={() => complete(task._id)}
                          className="btn-secondary "
                        >
                          Incomplete
                        </button>
                      )}

                      <div className="flex gap-4 text-xl items-center  justify-center p-1">
                        <button className="hover:text-green-600">
                          <FormatPainterOutlined
                          // onClick={() => handleUpdateClick(task)}
                          />
                        </button>
                        <button
                          //   onClick={() => deleteData(task._id)}
                          className="hover:text-red-600"
                        >
                          <DeleteOutlined />
                        </button>
                        {task.isImportant ? (
                          <button className="text-orange-400 hover:text-orange-300">
                            <FaStar
                            //  onClick={() => makeImportant(task._id) }
                            />
                          </button>
                        ) : (
                          <button>
                            <FaRegStar
                              className="text-orange-400 hover:text-orange-300"
                              //   onClick={() => makeImportant(task._id)}
                            />
                          </button>
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
      </div>
    </>
  );
};

export default CompleteTask;
