import styled from "@emotion/styled";
import { Layout } from "antd";
import HeaderDefault from "./Header";
import SideBar from "./SideBar";

interface ILayoutPropsType {
  children: JSX.Element;
}
export default function LayoutPage(props: ILayoutPropsType): JSX.Element {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout>
        <HeaderDefault />

        <div
          style={{
            margin: "16px 16px",
            display: "flex",
          }}
        >
          <Body>{props.children}</Body>
        </div>
      </Layout>
    </Layout>
  );
}

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
`;
