import { useState } from "react";
import AddModal from "../Components/ui/Modals/AddModal/AddModal";
import TaskCard from "../Components/ui/TaskCard/TaskCard";
import { PlusCircleOutlined } from "@ant-design/icons";

const AllTask = () => {
  //  Add MODAL STATE
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen">
      <div className="mb-9 flex items-center justify-between ">
        <h1 className="ubuntu-bold text-2xl">All Tasks</h1>
        <PlusCircleOutlined
          onClick={() => setOpen(true)}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div>
        <TaskCard />
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AllTask;
