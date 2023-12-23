import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NAVLIST = [
  {
    id: 1,
    title: "자유게시판",
    url: "/board",
  },
  {
    id: 2,
    title: "중고마켓",
    url: "/usedmarket",
  },
  {
    id: 3,
    title: "마이페이지",
    url: "/mypage",
  },
];

export default function Nav(): JSX.Element {
  const router = useRouter();

  const onClickMoveToPage = (e: React.MouseEvent<HTMLDivElement>): void => {
    router.push(e.currentTarget.id);
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
          {NAVLIST?.map((data, index) => (
            <div key={data.id}>
              <NavTap
                id={data.url}
                isActive={router.route.includes(data.url)}
                onClick={onClickMoveToPage}
              >
                {data.title}
              </NavTap>

              {index === NAVLIST.length - 1 ? <></> : <Boundary>|</Boundary>}
            </div>
          ))}
        </NavGroup>
      </div>
    </>
  );
}

const NavGroup = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
`;

const NavTap = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
`;

const Boundary = styled.div`
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;
