import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCHBOARD } from "./BoardDetail.query";
import { IQuery, IQueryFetchBoardArgs } from "@/types/graphql/types";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCHBOARD,
    {
      variables: { boardId: router.query.boardId as string },
    }
  );

  console.log(router.query);
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
