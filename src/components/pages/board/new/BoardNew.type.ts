import { IBoard } from "@/types/graphql/types";

export interface IBoardWritePropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
}
