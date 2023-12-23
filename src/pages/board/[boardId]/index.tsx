import BoardDetail from "@/components/pages/board/detail/BoardDetail.container";
import BoardCommentList from "@/components/pages/comment/list/BoardCommentList.container";
import BoardComment from "@/components/pages/comment/new/BoardCommentNew.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardComment />
      <BoardCommentList />
    </>
  );
}
