import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { LoggedIn } from "../../../utils/isUserLoggedIn";
import Logout from "../Logout/Logout";
import { useGetUserQuery } from "../../../redux/features/auth/authApi";
import { UserData } from "../../../types/taskTypes";

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
  const { data } = useGetUserQuery("");
  const userEmail = LoggedIn();
  const email = userEmail.email;

  // Filter user data based on the email address
  const userData = data?.data?.filter(
    (user: UserData) => user.email === email
  )[0];

  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          {userData ? (
            <>
              <div className="flex items-center flex-col gap-3 justify-center mt-5 mb-20 lg:mb-[4rem]">
                <img
                  className="rounded-full truncate w-20 h-20 object-cover"
                  src={userData?.userImage}
                />
                <p className="text-sm ubuntu-bold-italic mt-2">{userData?.name}</p>
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
