import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HeaderDefault from "./header";

// import { Header } from '../Board/BoardDetail/BoardDetail.style';
// import Footer from "./footer";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

interface ILayoutPropsType {
  children: JSX.Element;
}
export default function LayoutPage(props: ILayoutPropsType): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();

  const onClickMoveToMainPage = (): void => {
    router.push(`/board`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ position: "sticky", top: 0, height: "95vh" }}
        width={300}
      >
        {collapsed ? (
          <></>
        ) : (
          <Title onClick={onClickMoveToMainPage}>개발자의 놀이터</Title>
        )}

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        <HeaderDefault />

        <div
          style={{
            margin: "16px 16px",

            display: "flex",
            // justifyContent: "end",
          }}
        >
          <Body>{props.children}</Body>
        </div>
      </Layout>
    </Layout>
  );
}

const Title = styled.span`
  margin: 15px;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 24px;
  min-height: 360px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  min-width: 1000px;
  /* justify-content: center; */
`;
