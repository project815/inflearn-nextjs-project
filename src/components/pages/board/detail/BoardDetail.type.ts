import { IQuery } from "@/types/graphql/types";

export interface IBoardDetailUIPropstype {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
}
