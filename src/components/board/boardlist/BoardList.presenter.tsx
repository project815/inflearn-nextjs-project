import Image from "next/image";
import {
  IconBtnBoardNew,
  IconDefaultUser,
  IconSearch,
  IconThumb,
} from "../../../../public/assets/icon";
import * as S from "./BoardList.style";

import Pagination from "@/components/units/Pagination/Pagination.container";
import { getToday } from "@/utility/common";
import "react-datepicker/dist/react-datepicker.css";
import { IBoardListUIPropsType } from "./BoardList.type";

interface BestBannerType {
  id: string;
  image: string;
  title: string;
  name: string;
  date: string;
  like: number;
}
const BANNERLIST: BestBannerType[] = [
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
];

export default function BoardListUI(props: IBoardListUIPropsType): JSX.Element {
  const {
    startDate,
    endDate,
    onChangeStartDate,
    onChangeEndDate,
    boardList,
    onClickMoveToBoard,
    onClickMoveToBoardNew,
    currentPage,
    setCurrentPage,
    totalCount,
    refetch,
  } = props;

  return (
    <S.Layout>
      <S.BestBannerLayOut>
        <S.BestBannerTitle>베스트 게시글</S.BestBannerTitle>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {BANNERLIST.map((i) => (
            <S.BestBannerGroup key={i.id}>
              <Image src={i.image} alt="" width={220} height={150} />
              <S.BestBannerInfoGroup>
                <S.BestBannerSubTitle>{i.title}</S.BestBannerSubTitle>
                <S.BestBannerUserInfo>
                  <Image src={IconDefaultUser} alt="" />
                  <S.BestBannerName>{i.name}</S.BestBannerName>
                </S.BestBannerUserInfo>
                <S.BestBannerDate>Data : {i.date}</S.BestBannerDate>
              </S.BestBannerInfoGroup>
              <S.BestBannerLikeGroup style={{}}>
                <Image src={IconThumb} alt="" width={24} />
                <S.BestBannerLikeCount>{i.like}</S.BestBannerLikeCount>
              </S.BestBannerLikeGroup>
            </S.BestBannerGroup>
          ))}
        </div>
      </S.BestBannerLayOut>

      <S.SearchInputGroup>
        <Image
          src={IconSearch}
          alt=""
          style={{ position: "absolute", left: "10px", top: "14px" }}
        />
        <S.SearchBoardInput placeholder="제목을 검색해주세요." />

        <div>
          <input
            type="date"
            style={{ height: "48px" }}
            defaultValue={startDate}
            onChange={onChangeStartDate}
          />
          <input
            type="date"
            style={{ height: "48px" }}
            defaultValue={endDate}
            onChange={onChangeEndDate}
          />
        </div>
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchInputGroup>

      <S.BoardTableGroup>
        <table
          style={{
            width: "100%",
            padding: "20px",
            textAlign: "center",
            borderCollapse: "collapse",
            borderBottom: "1.5px solid black",
            borderTop: "1.5px solid black",
          }}
        >
          <S.BoardTableHead>
            <tr>
              <th>번호</th>
              <th style={{ width: "60%" }}>제목</th>
              <th>작성자</th>
              <th style={{ width: "13%" }}>날짜</th>
            </tr>
          </S.BoardTableHead>
          {boardList?.map((i, index) => (
            <S.BoardTableBody
              key={i._id}
              onClick={() => {
                onClickMoveToBoard(i._id);
              }}
            >
              <tr>
                <td>{(currentPage - 1) * 10 + index + 1}</td>
                <td>{i.title}</td>
                <td>{i.writer}</td>
                <td>{getToday(String(i.createdAt))}</td>
              </tr>
            </S.BoardTableBody>
          ))}
        </table>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCount={totalCount}
          refetch={refetch}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <S.BoardTableButton onClick={onClickMoveToBoardNew}>
            <Image src={IconBtnBoardNew} alt="" />
            <S.BoardTableButtonText>게시물 등록하기</S.BoardTableButtonText>
          </S.BoardTableButton>
        </div>
      </S.BoardTableGroup>
    </S.Layout>
  );
}
