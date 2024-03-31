import { PlusOutlined } from "@ant-design/icons";
import AddModal from "../Modals/AddModal/AddModal";
import { useState } from "react";

const AddTaskCard = () => {
  //  Add MODAL STATE
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="border max-w-[20rem] h-[11rem] lg:max-w-[24rem] p-4 rounded-md shadow-md shadow-gray-600">
        <div onClick={() => setOpen(true)} className="flex  h-full w-full justify-center items-center gap-1 text-2xl text-gray-500 hover:text-gray-600 font-semibold cursor-pointer">
          <PlusOutlined /> Add Task
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddTaskCard;
