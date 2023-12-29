import { IBoardComment } from "@/types/graphql/types";
import CommentItemUI from "./CommentItem.presenter";

export interface IBoardCommentListUIPropsType {
  comment: IBoardComment;
}

export default function CommentItem(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { comment } = props;
  return (
    <>
      <CommentItemUI comment={comment} />
    </>
  );
}
