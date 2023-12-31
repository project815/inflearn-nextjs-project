import {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "@/types/graphql/types";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import CommentCreateAndUpdate from "../CommentCreateAndUpdate/CommentCreateAndUpdate.container";
import CommentItemUI from "./CommentItem.presenter";
import { DELETEBOARDCOMMENT } from "./CommentItem.query";

export interface IBoardCommentListUIPropsType {
  comment: IBoardComment;
}

export default function CommentItem(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { comment } = props;

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickIsEdit = (): void => {
    setIsEdit((prev) => !prev);
  };

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETEBOARDCOMMENT);

  const onClickDeleteBoardComment = async (): Promise<void> => {
    const password = prompt("비밀번호를 입력해주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: comment._id,
        },
        refetchQueries: ["fetchBoardComments"],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <>
      {isEdit ? (
        <CommentCreateAndUpdate
          isEdit={isEdit}
          onClickIsEdit={onClickIsEdit}
          comment={comment}
        />
      ) : (
        <CommentItemUI
          comment={comment}
          onClickIsEdit={onClickIsEdit}
          onClickDeleteBoardComment={onClickDeleteBoardComment}
        />
      )}
    </>
  );
}
