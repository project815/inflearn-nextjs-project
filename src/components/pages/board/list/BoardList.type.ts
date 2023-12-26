import { IBoard, IQuery, IQueryFetchBoardsArgs } from "@/types/graphql/types";
import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IBoardListUIPropsType {
  startDate: string;
  endDate: string;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChnageSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  boardList?: IBoard[];
  onClickMoveToBoard: (id: string) => void;
  onClickMoveToBoardNew: () => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalCount: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
