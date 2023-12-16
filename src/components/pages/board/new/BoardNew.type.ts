import { IBoard } from "@/types/graphql/types";

export interface IBoardWritePropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
}

export interface IBoardNewUIPropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onSubmitBoard: (e: React.FormEvent<HTMLFormElement>) => void;
  isActive: boolean;
}
