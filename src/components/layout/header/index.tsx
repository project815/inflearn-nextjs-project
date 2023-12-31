import styled from "@emotion/styled";
import { Button, Layout } from "antd";

const { Header } = Layout;

export default function HeaderDefault(): JSX.Element {
  return (
    <HeaderWrapper>
      <ButtonGroup>
        <LoginButton>로그인</LoginButton>
        <SignInButton>회원가입</SignInButton>
      </ButtonGroup>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled(Header)`
  padding: 10px;
  background-color: white;
`;
const ButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const LoginButton = styled(Button)`
  background-color: gray;
`;
const SignInButton = styled(Button)`
  background-color: #ffd600;
  margin-left: 10px;
`;
