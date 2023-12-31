import {
  ApartmentOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
  getItem("자유게시판", "/board", <PieChartOutlined />),
  getItem("중고마켓", "/usedmarket", <DesktopOutlined />),
  getItem("맛집 리스트", "/goodstore", <DesktopOutlined />),
  getItem("마이페이지", "/", <UserOutlined />, [
    getItem("마이페이지", "/"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),

  getItem("Files", "9", <FileOutlined />),
];

export default function SideBar(): JSX.Element {
  const router = useRouter();

  const onClickMoveToPage = (e: any): void => {
    console.log("e : ", e);
    router.push(String(e.key));
  };

  const [collapsed, setCollapsed] = useState(false);

  const onClickMoveToMainPage = (): void => {
    router.push(`/board`);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ position: "sticky", top: 0, height: "95vh" }}
      width={300}
    >
      {collapsed ? (
        <Logo />
      ) : (
        <Title onClick={onClickMoveToMainPage}>
          <ApartmentOutlined />
          <span style={{ marginLeft: "10px" }}>개발자의 놀이터</span>
        </Title>
      )}

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={onClickMoveToPage}
      />
    </Sider>
  );
}

const Title = styled.span`
  margin: 15px;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-sizing: border-box;
`;

const Logo = styled(ApartmentOutlined)`
  margin: 15px;
  padding: 15px;
  cursor: pointer;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  font-size: 24px;
`;
