import { FETCHBOARD } from "@/components/pages/board/detail/BoardDetail.query";
import BoardWrite from "@/components/pages/board/new/BoardNew.container";
import { IQuery, IQueryFetchBoardArgs } from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardUpdatePage() {
  const router = useRouter();
  const { data: defaultValue } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCHBOARD, {
    variables: { boardId: router.query.boardId as string },
  });

  return <BoardWrite isEdit={true} defaultValue={defaultValue?.fetchBoard} />;
}
