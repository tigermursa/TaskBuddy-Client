import {
  AlignLeftOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";

import { NavLink, Outlet } from "react-router-dom";

import DropdownComponent from "../ui/ProfileDropdown/ProfileDropdown";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import Test from "../ui/DataShowTemp/Test";

const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "001",
    label: <NavLink to={"/"}>All Tasks</NavLink>,
    icon: <AlignLeftOutlined />,
  },
  {
    key: "002",
    label: <NavLink to={"/completed"}>Completed</NavLink>,
    icon: <CheckCircleOutlined />,
  },
  {
    key: "003",
    label: <NavLink to={"/incomplete"}>Incomplete</NavLink>,
    icon: <AiOutlineCloseCircle />,
  },
  {
    key: "004",
    label: <NavLink to={"/important"}>Important</NavLink>,
    icon: <ThunderboltOutlined />,
  },
  {
    key: "005",
    label: <NavLink to={"/about"}>About</NavLink>,
    icon: <ExclamationCircleOutlined />
  },
];

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider breakpoint="md" collapsedWidth="0">
        <div
          style={{
            color: "white",
            padding: "2px",
            textAlign: "center",
            margin: "10px",
            fontSize: "24px",
          }}
        >
          <DropdownComponent />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>

      <Layout>
        {/* backgroundColor:"gray" */}
        <Content style={{ margin: "10px 24px 0" }}>
          <div
            style={{
              padding: 10,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* TODO: remove if not needed */}
        {/* <Footer style={{ textAlign: "center", border: "2px solid red" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
