import BoardDetail from "@/components/board/BoardDetail/BoardDetail.container";
import CommentCreateAndUpdate from "@/components/Comment/CommentCreateAndUpdate/CommentCreateAndUpdate.container";
import CommentList from "@/components/Comment/CommentList/CommentList.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <CommentCreateAndUpdate />
      <CommentList />
    </>
  );
}
