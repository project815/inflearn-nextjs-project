import InfiniteScroll from "react-infinite-scroller";

import { IQuery } from "@/types/graphql/types";
import CommentItem from "../CommentItem/CommentItem.container";

interface ICommentListPropsType {
  commentList?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}
export default function CommentListUI(
  props: ICommentListPropsType
): JSX.Element {
  const { commentList, onLoadMore } = props;
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true || false}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {commentList?.fetchBoardComments.map((data) => (
          <CommentItem key={data._id} comment={data} />
        ))}
      </InfiniteScroll>
    </>
  );
}
