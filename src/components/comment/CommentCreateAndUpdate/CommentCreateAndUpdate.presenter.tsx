import { IBoardComment, ICreateBoardCommentInput } from "@/types/graphql/types";
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
  onClickSubmit: () => void;

  isEdit?: boolean;
  // onClickIsEdit?: () => void;
  comment?: IBoardComment;
}

export default function CommentCreateAndUpdateUI(
  props: ICommentCreateAndUpdatePropsType
): JSX.Element {
  const {
    createBoardCommentInput,
    onChangeCommentInput,
    onChangeRate,
    onClickSubmit,
    isEdit,
    comment,
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
            value={comment?.writer ?? createBoardCommentInput.writer ?? ""}
          />
          {isEdit ?? false ? (
            <></>
          ) : (
            <S.CommentInput
              id="password"
              type="password"
              onChange={onChangeCommentInput}
              value={createBoardCommentInput.password ?? ""}
            />
          )}

          <S.CommentRate
            onChange={onChangeRate}
            value={comment?.rating ?? createBoardCommentInput.rating ?? 3}
          />
        </S.RowGroup>
        <S.CommentTextarea
          id="contents"
          onChange={onChangeCommentInput}
          value={comment?.contents ?? createBoardCommentInput.contents ?? ""}
        />
        <S.Border>
          <S.SubmitButton onClick={onClickSubmit}>
            {isEdit ?? false ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.Border>
      </S.CommentWrapper>
      <></>
    </>
  );
}
