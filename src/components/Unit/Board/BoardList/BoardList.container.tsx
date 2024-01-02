import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCHBOARDS, FETCHBOARDSCOUNT } from "./BoardList.query";

export default function BoardList(): JSX.Element {
  // 페이지 이동
  const router = useRouter();

  // 페이지 네이션 날짜 지정.
  const now = new Date();
  const [startDate, setStartDate] = useState<string>(
    new Date(now.setMonth(now.getMonth() - 1)).toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState<string>(
    new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10)
  );
  // 페이지 네이션 검색
  const [search, setSearch] = useState<string>("");
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: pageTotalCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCHBOARDSCOUNT, {
    variables: {
      endDate,
      startDate,
      search,
    },
  });
  const totalCount =
    pageTotalCount?.fetchBoardsCount !== undefined
      ? Math.ceil(pageTotalCount?.fetchBoardsCount / 10)
      : 0;

  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEndDate(e.target.value);
    // setPage(1);
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStartDate(e.target.value);
    // setPage(1);
  };

  const onChnageSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };
  const onClickMoveToBoard = async (id: string): Promise<void> => {
    await router.push(`/board/${id}`);
  };
  const onClickMoveToBoardNew = async (): Promise<void> => {
    await router.push("/board/create");
  };

  // 페이지네이션 검색 결과.
  const { data: boardList, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCHBOARDS, {
    variables: {
      startDate,
      endDate,
      search,
    },
  });

  return (
    <BoardListUI
      startDate={startDate}
      endDate={endDate}
      onChangeEndDate={onChangeEndDate}
      onChangeStartDate={onChangeStartDate}
      onChnageSearch={onChnageSearch}
      boardList={boardList?.fetchBoards}
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalCount={totalCount}
      refetch={refetch}
    />
  );
}
