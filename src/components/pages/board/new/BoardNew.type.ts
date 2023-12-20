import { IBoard, IBoardAddressInput } from "@/types/graphql/types";

export interface IBoardWritePropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
}

export interface IBoardNewUIPropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
  boardAddress?: IBoardAddressInput;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddressModal: any;
  onChangeBoardAddress: (data: any) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onSubmitBoard: any;
  //  React.MouseEvent<HTMLButtonElement, MouseEvent>;
  isActive: boolean;
}
