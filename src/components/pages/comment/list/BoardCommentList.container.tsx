import { IQuery, IQueryFetchBoardCommentsArgs } from "@/types/graphql/types";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETEBOARDCOMMENT,
  FETCHBOARDCOMMENTS,
} from "./BoardCommentList.query";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCHBOARDCOMMENTS, {
    variables: {
      boardId: router.query.boardId as string,
    },
  });

  const [deleteBoardComment] = useMutation(DELETEBOARDCOMMENT);

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

  return (
    <BoardCommentListUI
      data={data?.fetchBoardComments}
      onClickDeleteBoardComment={onClickDeleteBoardComment}
    />
  );
}
