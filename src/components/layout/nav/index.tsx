import emotionStyled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Nav(): JSX.Element {
  const router = useRouter();

  const onClickMoveToBoardPage = (): void => {
    router.push(`/board`);
  };

  const onClickMoveToTestPage = (): void => {
    router.push(`/tmp`);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "64px",
          bottom: "5px",
          position: "relative",
          backgroundColor: "#FFD600",
        }}
      >
        <NavGroup>
          <NavTap
            isActive={router.route.includes("board")}
            onClick={onClickMoveToBoardPage}
          >
            자유게시판
          </NavTap>
          <Boundary>|</Boundary>
          <NavTap
            isActive={router.route.includes("tmp")}
            onClick={onClickMoveToTestPage}
          >
            중고마켓
          </NavTap>
          <Boundary>|</Boundary>
          <NavTap isActive={router.route.includes("tmp")}>마이페이지</NavTap>
        </NavGroup>
      </div>
    </>
  );
}

const NavGroup = emotionStyled.div`
    display: flex;
    height:100%;
    justify-content: center;
    align-items: center;
`;

const NavTap = emotionStyled.div<{ isActive: boolean }>`
  cursor: pointer;
  opacity:  ${(props) => (props.isActive ? "1" : "0.5")};
  font-weight: : ${(props) => (props.isActive ? "600" : "400")};
`;

const Boundary = emotionStyled.div`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
`;

// nav에 탭에 따라 글자 색 변경.
