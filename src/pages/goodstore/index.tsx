import styled from "@emotion/styled";
import Image from "next/image";
import { IconDefaultUser, IconThumb } from "../../../public/assets/icon";

interface StoreType {
  id: string;
  name: string;
  title: string;

  image: string;
  like: number;
  date: string;
  create_date?: string;
  owner?: string;
  address?: string;
}

const BANNERLIST: StoreType[] = [
  {
    id: "1",
    image: "/assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "2",
    image: "/assets/images/img_board2.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "3",
    image: "/assets/images/img_board3.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "4",
    image: "/assets/images/img_board4.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "5",
    image: "/assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "6",
    image: "/assets/images/img_board2.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "7",
    image: "/assets/images/img_board3.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "8",
    image: "/assets/images/img_board4.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "7",
    image: "/assets/images/img_board3.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "8",
    image: "/assets/images/img_board4.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "7",
    image: "/assets/images/img_board3.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
];
export default function GoodStoreListPage(): JSX.Element {
  return (
    <>
      <StoreLayOut>
        {BANNERLIST.map((i) => (
          <StoreGroup key={i.id}>
            <Image src={i.image} alt="" width={220} height={150} />
            <StoreInfoGroup>
              <StoreSubTitle>{i.title}</StoreSubTitle>
              <StoreUserInfo>
                <Image src={IconDefaultUser} alt="" />
                <StoreName>{i.name}</StoreName>
              </StoreUserInfo>
              <StoreDate>Data : {i.date}</StoreDate>
            </StoreInfoGroup>
            <StoreLikeGroup style={{}}>
              <Image src={IconThumb} alt="" width={24} />
              <StoreLikeCount>{i.like}</StoreLikeCount>
            </StoreLikeGroup>
          </StoreGroup>
        ))}
      </StoreLayOut>
    </>
  );
}
export const StoreLayOut = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const StoreTitle = styled.h2``;

export const StoreGroup = styled.span`
  /* 각 아이템의 스타일을 설정 */
  break-inside: avoid; /* 열 내에서 아이템이 나뉘는 것을 방지 */
  margin-bottom: 20px; /* 아이템 간의 간격 설정 */
  display: flex;
  width: 205px;
  height: 200px;
  border-radius: 20px;
  justify-content: start;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const StoreInfoGroup = styled.div`
  padding: 12px;
  box-sizing: border-box;
`;

export const StoreSubTitle = styled.div`
  /* margin-top: 5px; */
  font-size: 15px;
  font-weight: bold;
`;

export const StoreUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const StoreName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const StoreDate = styled.div`
  color: #828282;
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.6;
  left: 3px;
  position: relative;
`;

export const StoreLikeGroup = styled.div`
  position: absolute;
  right: 14px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StoreLikeCount = styled.div`
  /* margin-top: px; */
  font-size: 13px;
`;

export const Test = styled.div``;
