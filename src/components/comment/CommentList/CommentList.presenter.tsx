import { IQuery } from "@/types/graphql/types";
import CommentItem from "../CommentItem/CommentItem.container";

interface ICommentListPropsType {
  commentList?: Pick<IQuery, "fetchBoardComments">;
}
export default function CommentListUI(
  props: ICommentListPropsType
): JSX.Element {
  const { commentList } = props;
  return (
    <>
      {commentList?.fetchBoardComments.map((data) => (
        <CommentItem key={data._id} comment={data} />
      ))}
    </>
  );
}
