import { IBoard } from "@/types/graphql/types";

export interface IBoardListUIPropsType {
  startDate: string;
  endDate: string;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChnageSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickPage: (page: number) => void;
  boardList?: IBoard[];
  currentPage: number;
  totalPages: number | undefined;
  page: number[];
  onClickMoveToBoard: (id: string) => void;
  onClickMoveToBoardNew: () => void;
}
