import Image from "next/image";
import { IconDefaultUser, IconThumb } from "../../../../../public/assets/icon";
import * as S from "./StoreList.styles";

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

interface StoreListPropsType {
  onClickStoreItem: () => void;
}
export default function StoreListUI(props: StoreListPropsType): JSX.Element {
  const { onClickStoreItem } = props;
  return (
    <>
      {" "}
      <button onClick={onClickStoreItem}>생성!</button>
      <S.StoreLayOut>
        {BANNERLIST.map((i) => (
          <S.StoreGroup key={i.id}>
            <Image src={i.image} alt="" width={220} height={150} />
            <S.StoreInfoGroup>
              <S.StoreSubTitle>{i.title}</S.StoreSubTitle>
              <S.StoreUserInfo>
                <Image src={IconDefaultUser} alt="" />
                <S.StoreName>{i.name}</S.StoreName>
              </S.StoreUserInfo>
              <S.StoreDate>Data : {i.date}</S.StoreDate>
            </S.StoreInfoGroup>
            <S.StoreLikeGroup style={{}}>
              <Image src={IconThumb} alt="" width={24} />
              <S.StoreLikeCount>{i.like}</S.StoreLikeCount>
            </S.StoreLikeGroup>
          </S.StoreGroup>
        ))}
      </S.StoreLayOut>
    </>
  );
}
