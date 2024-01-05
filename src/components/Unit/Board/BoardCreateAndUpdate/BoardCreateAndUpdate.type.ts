import { IBoard, IBoardAddressInput, InputMaybe } from "@/types/graphql/types";

export interface IBoardWritePropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
}

export interface IBoardNewUIPropsType {
  isEdit: boolean;
  defaultValue?: IBoard;
  boardAddress?: InputMaybe<IBoardAddressInput> | undefined;

  onClickAddressModal: any;
  onChangeBoardAddress: (data: any) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onSubmitBoard: any;
  //  React.MouseEvent<HTMLButtonElement, MouseEvent>;
  isActive: boolean;
  onChangeBoardInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickFile: () => void;
}
