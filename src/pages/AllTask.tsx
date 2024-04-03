import { useState } from "react";
import AddModal from "../Components/ui/Modals/AddModal/AddModal";
import TaskCard from "../Components/ui/TaskCard/TaskCard";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useGetTaskDataQuery } from "../redux/features/task/taskApi";
import { LoggedIn } from "../utils/isUserLoggedIn";
import Progressbar from "../Components/ui/Progress/Progressbar";
import useComponentWidth from "../hooks/useComponentWidth";
import { Tasks } from "../types/taskTypes";
import { Button } from "antd";
import DrawerAnt from "../Components/ui/Drawer/Drawer";

const AllTask = () => {
  const [open, setOpen] = useState(false);
  //to make blur when side bar opens
  const { componentWidth, componentRef } = useComponentWidth();
  const { data, isLoading, isError } = useGetTaskDataQuery("");
  const taskData = data?.data.tasks;
  const email = LoggedIn();
  const [openDrawer, setOpenDrawer] = useState(false);
  const filteredTasks = taskData?.filter(
    (task: Tasks) => task.email === email?.email
  );

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={`h-[100vh] ${componentWidth <= 150 ? "blur-phone  overflow-hidden " : ""}`}>
      <div className="mb-9 flex items-center justify-between ">
        <div className="flex gap-6 items-center">
          <h1 className="ubuntu-bold text-lg md:text-2xl"> All Tasks</h1>
          <Progressbar />
          <Button type="primary" className="me-4" onClick={showDrawer}>
            Calender
          </Button>
        </div>

        <PlusCircleOutlined
          onClick={() => setOpen(true)}
          className="text-3xl cursor-pointer"
        />
      </div>
      <div ref={componentRef} >
        <TaskCard
          data={filteredTasks}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
      <AddModal open={open} setOpen={setOpen} />
      <DrawerAnt open={openDrawer} onClose={onCloseDrawer} />
    </div>
  );
};

export default AllTask;
