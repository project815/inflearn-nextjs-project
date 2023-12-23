import styled from "@emotion/styled";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { IconCodeCampLogo } from "../../../../public/assets/icon";

export default function Header(): JSX.Element {
  const router = useRouter();

  const onClickMoveToMainPage = (): void => {
    router.push(`/board`);
  };

  return (
    <>
      <HeaderGroup>
        <Logo
          src={IconCodeCampLogo}
          alt="tmp"
          onClick={onClickMoveToMainPage}
        />
        <ButtonGroup>
          <LoginButton>로그인</LoginButton>
          <SignInButton>회원가입</SignInButton>
        </ButtonGroup>
      </HeaderGroup>
    </>
  );
}

const Logo = styled(Image)`
  cursor: pointer;
`;

const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 900px;
`;

const ButtonGroup = styled.div``;

const LoginButton = styled(Button)`
  background-color: gray;
`;
const SignInButton = styled(Button)`
  background-color: #ffd600;
  margin-left: 10px;
`;
