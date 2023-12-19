import type { IQuery } from "@/types/graphql/types";

export interface IBoardDetailUIPropstype {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => Promise<void>;
  onClickMoveToBoardEdit: () => void;
}
