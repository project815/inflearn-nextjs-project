import Image from "next/image";
import { IconBtnBoardNew, IconSearch } from "../../../../public/assets/icon";
import * as S from "./BoardList.style";

import Pagination from "@/components/units/Pagination/Pagination.container";
import { getToday } from "@/utility/common";
import "react-datepicker/dist/react-datepicker.css";
import { IBoardListUIPropsType } from "./BoardList.type";

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
      <S.BoardTitle>게시글 목록</S.BoardTitle>

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
