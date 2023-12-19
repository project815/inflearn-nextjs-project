import { useQuery } from "@apollo/client";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { IQuery, IQueryFetchBoardCommentsArgs } from "@/types/graphql/types";
import { FETCHBOARDCOMMENTS } from "../new/BoardCommentNew.query";
import { useRouter } from "next/router";

export default function BoardCommentList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCHBOARDCOMMENTS, {
    variables: {
      boardId: router.query.boardId as string,
    },
  });

  return <BoardCommentListUI data={data?.fetchBoardComments} />;
}
