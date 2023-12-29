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
  onClickSubmit: () => void;

  isEdit?: boolean;
  // onClickIsEdit?: () => void;
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
  } = props;
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitleGroup>
          <Image src={IconComment} alt="" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentTitleGroup>
        <S.RowGroup>
          {isEdit ?? false ? (
            <></>
          ) : (
            <S.CommentInput
              id="writer"
              type="text"
              onChange={onChangeCommentInput}
              value={createBoardCommentInput.writer ?? ""}
              placeholder="작성자명을 입력해주세요."
            />
          )}

          <S.CommentInput
            id="password"
            type="password"
            onChange={onChangeCommentInput}
            value={createBoardCommentInput.password ?? ""}
            placeholder="비밀번호를 입력해주세요."
          />

          <S.CommentRate
            onChange={onChangeRate}
            value={createBoardCommentInput.rating}
          />
        </S.RowGroup>
        <S.CommentTextarea
          id="contents"
          onChange={onChangeCommentInput}
          value={createBoardCommentInput.contents}
          placeholder="내용을 입력해주세요."
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
