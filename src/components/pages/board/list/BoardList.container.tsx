import { useQuery } from "@apollo/client";
import { FETCHBOARDS, FETCHBOARDSCOUNT } from "./BoardList.query";
import BoardListUI from "./BoardList.presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "@/types/graphql/types";
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
  const [endDate, setEndDate] = useState<string>(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10)
  );
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // const [boardList, setBoardList] = useState<BoardList[]>();
  // const [boardCount, setBoardCount] = useState<number>(0);

  const { data: boardList } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCHBOARDS, {
    variables: {
      startDate,
      endDate,
      search,
      page,
    },
  });
  console.log("@@@@@page : ", page);

  const { data: pageCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCHBOARDSCOUNT, {
    variables: {
      endDate,
      startDate,
      search,
    },
  });

  console.log("pageCount : ", pageCount);

  console.log(
    `startDate : ${startDate}, endDate : ${endDate} totalDate: ${Math.ceil(
      pageCount?.fetchBoardsCount! / 10
    )}`
  );

  // console.log("endDate : ", Math.floor(pageCount?.fetchBoardsCount! / 10));
  const router = useRouter();

  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    setPage(1);
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    setPage(1);
  };
  const onChnageSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onClickPage = (page: number) => {
    setPage(page);
  };
  const onClickMoveToBoard = (id: string) => {
    router.push(`/board/${id}`);
  };
  const onClickMoveToBoardNew = () => {
    router.push("/board/new");
  };
  // const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPage(Number(e.target.value));
  // };

  const generatePageNumbers = (
    currentPage: number,
    totalPages: number | undefined
  ): number[] => {
    if (!totalPages) return [];
    const pages = [];
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(Math.ceil(totalPages / 10), startPage + 9);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

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
      totalPages={Math.ceil(pageCount?.fetchBoardsCount! / 10)}
      page={generatePageNumbers(page, pageCount?.fetchBoardsCount)}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
