import { IQuery, IQueryFetchBoardCommentsArgs } from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { FETCHBOARDCOMMENTS } from "./BoardCommentList.query";

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

  return <BoardCommentListUI data={data} />;
}
