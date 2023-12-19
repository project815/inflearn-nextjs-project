import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCHBOARD } from "./BoardDetail.query";
import type { IQuery, IQueryFetchBoardArgs } from "@/types/graphql/types";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCHBOARD,
    {
      variables: {
        boardId:
          typeof router.query.boardId === "string" ? router.query.boardId : "",
      },
    }
  );

  const onClickMoveToBoardList = async (): Promise<void> => {
    await router.push(`/board`);
  };

  const onClickMoveToBoardEdit = async (): Promise<void> => {
    if (typeof router.query.boardId === "string")
      await router.push(`/board/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList} // type을 () => Promise<void>로 설정하면 props의 규칙에 어긋남. 이것을 해결하기 위해서는 HOF를 사용 warpAsync 함수를 사용해야 함.
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}
