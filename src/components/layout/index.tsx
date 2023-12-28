import styled from "@emotion/styled";
import Carousel from "./banner";
import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

interface ILayoutPropsType {
  children: JSX.Element;
}
export default function Layout(props: ILayoutPropsType): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header></Header>
      <Carousel></Carousel>
      <Nav></Nav>

      <Body> {props.children}</Body>
      <Footer></Footer>
    </div>
  );
}

const Body = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  /* justify-content: center; */
`;
