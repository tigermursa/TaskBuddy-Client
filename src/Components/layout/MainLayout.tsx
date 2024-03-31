import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import TaskCard from "../ui/TaskCard/TaskCard";

const { Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "001",
    label: "Home",
    icon: <UserOutlined />,
    children: [
      {
        key: "002",
        label: "Home 2",
      },
    ],
  },
];
const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            padding: "2px",
            textAlign: "center",
            margin: "10px",
            fontSize: "24px",
          }}
        >
          <h1>Task Buddy</h1>
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
        <Content style={{ margin: "24px 16px 0", border: "2px solid red" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="grid gap-4 md:gap-7 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              <TaskCard />
            </div>
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
