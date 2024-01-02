import { IQuery, IQueryFetchBoardCommentsArgs } from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./CommentList.presenter";
import { FETCHBOARDCOMMENTS } from "./CommentList.query";

export default function CommentList(): JSX.Element {
  const router = useRouter();

  const { data: commentList, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCHBOARDCOMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onLoadMore = (): void => {
    console.log("???");
    if (commentList === undefined) return;
    console.log(
      Math.ceil((commentList?.fetchBoardComments.length ?? 10) / 10) + 1
    );
    void fetchMore({
      variables: {
        page:
          Math.ceil((commentList?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === null) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };
  return <CommentListUI commentList={commentList} onLoadMore={onLoadMore} />;
}
