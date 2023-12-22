import styled from "@emotion/styled";
import { Button } from "antd";
import Image from "next/image";
import { IconCodeCampLogo } from "../../../../public/assets/icon";

export default function Header(): JSX.Element {
  return (
    <>
      <HeaderGroup>
        <Image src={IconCodeCampLogo} alt="tmp" />
        <ButtonGroup>
          <LoginButton>로그인</LoginButton>
          <SignInButton>회원가입</SignInButton>
        </ButtonGroup>
      </HeaderGroup>
    </>
  );
}

const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 1000px;
`;

const ButtonGroup = styled.div``;

const LoginButton = styled(Button)`
  background-color: gray;
`;
const SignInButton = styled(Button)`
  background-color: #ffd600;
  margin-left: 20px;
`;
