import { StoreType } from "@/types/store";
import Image from "next/image";
import { IconDefaultUser, IconThumb } from "../../../../../public/assets/icon";
import { ImageBoard1 } from "../../../../../public/assets/images";
import * as S from "./StoreList.styles";

// const BANNERLIST: StoreType[] = [
//   {
//     id: "1",
//     image: "/assets/images/img_board1.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "2",
//     image: "/assets/images/img_board2.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "3",
//     image: "/assets/images/img_board3.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "4",
//     image: "/assets/images/img_board4.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "5",
//     image: "/assets/images/img_board1.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "6",
//     image: "/assets/images/img_board2.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "7ㄷㅈ",
//     image: "/assets/images/img_board3.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "8",
//     image: "/assets/images/img_board4.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "7",
//     image: "/assets/images/img_board3.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "10213",
//     image: "/assets/images/img_board4.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
//   {
//     id: "1234",
//     image: "/assets/images/img_board3.png",
//     title: "게시물 제목입니다.",
//     name: "노원두",
//     date: "2021.02.18",
//     like: 356,
//   },
// ];

interface StoreListPropsType {
  onClickStoreItem: () => void;
  storeList: StoreType[];
}
export default function StoreListUI(props: StoreListPropsType): JSX.Element {
  const { onClickStoreItem, storeList } = props;
  return (
    <>
      <button onClick={onClickStoreItem}>생성!</button>
      <S.StoreLayOut>
        {storeList.map((i) => (
          <S.StoreGroup key={i.id}>
            <Image src={ImageBoard1} alt="" width={220} height={150} />
            <S.StoreInfoGroup>
              <S.StoreSubTitle>{i.name}</S.StoreSubTitle>
              <S.StoreUserInfo>
                <Image src={IconDefaultUser} alt="" />
                <S.StoreName>{i.description}</S.StoreName>
              </S.StoreUserInfo>
              <S.StoreDate>Data : //</S.StoreDate>
            </S.StoreInfoGroup>
            <S.StoreLikeGroup style={{}}>
              <Image src={IconThumb} alt="" width={24} />
              <S.StoreLikeCount>{213}</S.StoreLikeCount>
            </S.StoreLikeGroup>
          </S.StoreGroup>
        ))}
      </S.StoreLayOut>
    </>
  );
}
