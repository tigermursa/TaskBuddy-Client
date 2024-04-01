import React, { useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { LoggedIn } from "../../../utils/isUserLoggedIn";
import Logout from "../Logout/Logout";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className=" text-center ">
        <Logout />
      </div>
    ),
  },
];

const DropdownComponent: React.FC = () => {
  const [isLoggedIn] = useState(!!localStorage.getItem("token"));
  const userData = LoggedIn();
  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          {isLoggedIn ? (
            <>
              <div className="flex items-center flex-col gap-3 justify-center mt-5 lg:mb-[4rem]">
                <img
                  width={80}
                  className="rounded-full"
                  src="https://media.gettyimages.com/id/1344327532/photo/studio-portrait-of-attractive-19-year-old-woman-with-brown-hair.jpg?s=612x612&w=gi&k=20&c=OtNj0jF4zDdcJk6m3AJh0nKisEtppI2XFrqS9oqLsF4="
                />
                <p className="text-lg ubuntu-bold-italic">
                  {userData?.email.slice(0, -10)}
                </p>
              </div>
            </>
          ) : (
            <h1>Task Buddy</h1>
          )}
        </div>
      </Dropdown>
    </>
  );
};

export default DropdownComponent;
