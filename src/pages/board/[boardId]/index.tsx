import BoardDetail from "@/components/Unit/Board/BoardDetail/BoardDetail.container";
import CommentCreateAndUpdate from "@/components/Unit/Comment/CommentCreateAndUpdate/CommentCreateAndUpdate.container";
import CommentList from "@/components/Unit/Comment/CommentList/CommentList.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentCreateAndUpdate />
      <CommentList />
    </>
  );
}
