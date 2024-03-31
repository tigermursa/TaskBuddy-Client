import { DeleteOutlined, FormatPainterOutlined } from "@ant-design/icons";

const TaskCard = () => {
  return (
    <>
      <div className="border max-w-[20rem] lg:max-w-[24rem] p-4 rounded-md shadow-md shadow-gray-600">
        <div>
          <div className="flex justify-between items-center ">
            <h1 className="text-xl font-semibold">Update Resume</h1>
            <h1 className="border w-16 bg-red-600 p-1 rounded-md text-gray-100 mb-3 text-xs">
              Personal
            </h1>
          </div>

          <p className=" text-xs text-gray-700 mb-5 mt-2">
            Update the resume and the projects in the resume and double check
          </p>

          <div className="">
            <div>
              <h3 className="font-semibold mb-2">Deadline: 2/10/2024</h3>
              {/* <button className="button-primary ">Completed</button> */}
              <div className="flex justify-between  w-[900]">
                <button className="button-secondary ">Incomplete</button>
                <div className="flex gap-4 text-xl">
                  <button className="hover:text-green-600">
                    <FormatPainterOutlined />
                  </button>
                  <button className="hover:text-red-600">
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
