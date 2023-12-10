import { useQuery } from "@apollo/client";
import { FETCHBOARDS, FETCHBOARDSCOUNT } from "./BoardList.query";
import BoardListUI from "./BoardList.presenter";
import { useEffect, useState } from "react";
type SearchBoard = {
  $endDate: string;
  $startDate: string;
  $search: string;
  $page: number;
};

export type BoardList = {
  _id: string;
  writer: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  likeCount: number;
  dislikeCount: number;
  images: string[];
  // boardAddress: BoardAddress
  // user: User
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export default function BoardList() {
  const now = new Date();

  const [startDate, setStartDate] = useState<string>(
    new Date(now.setMonth(now.getMonth() - 1)).toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // const [boardList, setBoardList] = useState<BoardList[]>();
  // const [boardCount, setBoardCount] = useState<number>(0);

  const { data: boardList } = useQuery(FETCHBOARDS, {
    variables: {
      startDate,
      endDate,
      search,
      page,
    },
  });

  const { data: pageCount } = useQuery(FETCHBOARDSCOUNT);

  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const onChnageSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onClickPage = (page: number) => {
    setPage(page);
  };
  // const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPage(Number(e.target.value));
  // };

  const generatePageNumbers = (currentPage: number, totalPages: number) => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPages, startPage + 9);

    console.log(`startPage: ${startPage}, endPage: ${endPage}`);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  console.log("i : ", pageCount);

  return (
    <BoardListUI
      startDate={startDate}
      endDate={endDate}
      onChangeEndDate={onChangeEndDate}
      onChangeStartDate={onChangeStartDate}
      onChnageSearch={onChnageSearch}
      onClickPage={onClickPage}
      boardList={boardList?.fetchBoards}
      currentPage={page}
      totalPages={pageCount?.fetchBoardsCount}
      page={generatePageNumbers(page, pageCount?.fetchBoardsCount)}
    />
  );
}
