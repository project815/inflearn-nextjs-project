import { IQuery, IQueryFetchBoardCommentsArgs } from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./CommentList.presenter";
import { FETCHBOARDCOMMENTS } from "./CommentList.query";

export default function CommentList(): JSX.Element {
  const router = useRouter();

  const { data: commentList } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCHBOARDCOMMENTS, {
    variables: {
      page: 1,
      boardId: String(router.query.boardId),
    },
  });

  console.log(commentList);

  return <CommentListUI commentList={commentList} />;
}
