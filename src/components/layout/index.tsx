import Carousel from "./carousel";
import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

interface ILayoutPropsType {
  children: JSX.Element;
}
export default function Layout(props: ILayoutPropsType): JSX.Element {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Nav></Nav>
      {props.children}
      <Footer></Footer>
    </>
  );
}
