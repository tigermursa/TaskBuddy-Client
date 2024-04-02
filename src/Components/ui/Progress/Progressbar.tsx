import React from "react";
import { Flex, Progress } from "antd";
import { useGetTaskDataQuery } from "../../../redux/features/task/taskApi";
import { LoggedIn } from "../../../utils/isUserLoggedIn";
import { Tasks } from "../../../types/taskTypes";

const Progressbar: React.FC = () => {
  const { data } = useGetTaskDataQuery("");
  const TokenData = LoggedIn();
  const email = TokenData.email;

  // Filter tasks where status is true
  const completedTasks = data?.data?.tasks.filter(
    (task: Tasks) => task.email === email && task.status
  );

  // Calculate the percentage of completed tasks
  const totalTasks = data?.data?.tasks.filter((task: Tasks) => task.email === email);
  const completedPercentage = totalTasks
    ? (completedTasks?.length / totalTasks.length) * 100
    : 0;

  return (
    <div className="">
      <Flex justify="center" align="center">
        <Progress type="circle" percent={completedPercentage} strokeWidth={8} size={70} />
      </Flex>
    </div>
  );
};

export default Progressbar;
