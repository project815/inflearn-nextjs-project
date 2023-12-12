import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCHBOARD } from "./BoardDetail.query";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCHBOARD, {
    variables: { boardId: router.query.boardId },
  });
  const onClickMoveToBoardList = () => {
    router.push(`/board`);
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/board/${router.query.boardId}/edit`);
  };
  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}
