import { ICreateBoardCommentInput } from "@/types/graphql/types";
import Image from "next/image";
import { IconComment } from "../../../../public/assets/icon";
import * as S from "./CommentCreateAndUpdate.styles";
interface ICommentCreateAndUpdatePropsType {
  createBoardCommentInput: ICreateBoardCommentInput;
  onChangeCommentInput: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeRate: (e: number) => void;
  onClickCreateComment: () => void;
}

export default function CommentCreateAndUpdateUI(
  props: ICommentCreateAndUpdatePropsType
): JSX.Element {
  const {
    createBoardCommentInput,
    onChangeCommentInput,
    onChangeRate,
    onClickCreateComment,
  } = props;
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitleGroup>
          <Image src={IconComment} alt="" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentTitleGroup>
        <S.RowGroup>
          <S.CommentInput
            id="writer"
            type="text"
            onChange={onChangeCommentInput}
            value={createBoardCommentInput.writer ?? ""}
          />
          <S.CommentInput
            id="password"
            type="password"
            onChange={onChangeCommentInput}
            value={createBoardCommentInput.password ?? ""}
          />
          <S.CommentRate onChange={onChangeRate} />
        </S.RowGroup>
        <S.CommentTextarea
          id="contents"
          onChange={onChangeCommentInput}
          value={createBoardCommentInput.contents ?? ""}
        />
        <S.Border>
          <S.SubmitButton onClick={onClickCreateComment}>
            등록하기
          </S.SubmitButton>
        </S.Border>
      </S.CommentWrapper>
      <></>
    </>
  );
}
