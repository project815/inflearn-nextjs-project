import BoardDetail from "@/components/board/BoardDetail/BoardDetail.container";
import CommentCreateAndUpdate from "@/components/Comment/CommentCreateAndUpdate/CommentMutation.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentCreateAndUpdate />
    </>
  );
}
