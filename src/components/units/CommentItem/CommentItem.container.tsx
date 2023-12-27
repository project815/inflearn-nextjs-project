import {
  DELETEBOARDCOMMENT,
  FETCHBOARDCOMMENTS,
  UPDATEBOARDCOMMENT,
} from "@/components/pages/comment/list/BoardCommentList.query";
import { IBoardComment } from "@/types/graphql/types";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentItemUI from "./CommentItem.presenter";

export interface IBoardCommentListUIPropsType {
  data: IBoardComment;
}

export default function CommentItem(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { data } = props;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [updateBoardComment] = useMutation(UPDATEBOARDCOMMENT);
  const [deleteBoardComment] = useMutation(DELETEBOARDCOMMENT);

  const [modifiedComment, setModifiedComment] = useState<string>(data.contents);
  const [modifiedRating, setModifiedRating] = useState<number>(data.rating);
  const [password, setPassword] = useState<string>("");

  const onClickUpdateBoardComment = async (): Promise<void> => {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: modifiedComment,
            rating: modifiedRating,
          },
          boardCommentId: data._id,
          password,
        },
      });
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const onClickDeleteBoardComment = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const boardCommentId = e.currentTarget.id;

    console.log(boardCommentId);
    const password = prompt("비밀번호를 입력해주세요.");

    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [FETCHBOARDCOMMENTS],
      });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
      console.log(err);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onChangeModifiedComment = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setModifiedComment(e.target.value);
  };

  const onChangeModifiedRating = (e: number): void => {
    setModifiedRating(e);
  };

  const onClickIsEdit = (): void => {
    setIsEdit(!isEdit);

    if (isEdit) {
      onClickUpdateBoardComment();
    }
  };

  return (
    <>
      <CommentItemUI
        data={data}
        isEdit={isEdit}
        onClickUpdateBoardComment={onClickUpdateBoardComment}
        onClickDeleteBoardComment={onClickDeleteBoardComment}
        onChangePassword={onChangePassword}
        onChangeModifiedComment={onChangeModifiedComment}
        onClickIsEdit={onClickIsEdit}
        onChangeModifiedRating={onChangeModifiedRating}
      />
    </>
  );
}
