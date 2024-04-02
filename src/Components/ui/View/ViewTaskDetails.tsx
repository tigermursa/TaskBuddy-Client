import { Tasks } from "../../../types/taskTypes";

import { FaRegStar, FaStar } from "react-icons/fa";
import { Tooltip } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

interface ViewTaskDetailsProps {
  task: Tasks | null;
}
const color = ["purple"];
const ViewTaskDetails: React.FC<ViewTaskDetailsProps> = ({ task }) => {
  return (
    <div>
      <div className="">
        <div>
          <div className="flex justify-between items-center ">
            <h1 className="text-lg md:text-xl font-semibold truncate">
              {task?.title}
            </h1>
          </div>
          <p className="text-lg text-gray-700 mb-5 mt-5 ">
            {task?.description}
          </p>
          <div className="">
            <div>
              <h3 className="font-semibold text-lg text-red-400 mb-3">
                <ClockCircleOutlined className="me-1" />
                Deadline:{" "}
                {task?.deadline
                  ? new Date(task.deadline).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </h3>
              <div className="flex justify-between w-[900]">
                {task?.status ? (
                  <button  className="  p-2 border-green-500 border-2 rounded-xl text-green-500 mt-5 font-semibold ">Completed</button>
                ) : (
                  <button className="  p-2 border-red-500 border-2 rounded-xl text-red-500 mt-5 font-semibold ">Incomplete</button>
                )}
                <div className="flex gap-4 text-xl items-center ms-2 me-1 justify-center p-1 ">
                  {task?.isImportant ? (
                    <Tooltip
                      title="Important Task"
                      color={color[0]}
                      key={color[0]}
                    >
                      <button className="text-orange-400 hover:text-orange-300 text-4xl">
                        <FaStar />
                      </button>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      title="Important Task"
                      color={color[0]}
                      key={color[0]}
                    >
                      <button>
                        <FaRegStar className="text-orange-400 hover:text-orange-300 text-4xl" />
                      </button>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskDetails;
