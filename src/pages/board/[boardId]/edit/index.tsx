import BoardWrite from "@/components/board/BoardCreateAndUpdate/BoardNew.container";
import { FETCHBOARD } from "@/components/board/BoardCreateAndUpdate/BoardNew.query";
import { IQuery, IQueryFetchBoardArgs } from "@/types/graphql/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardUpdatePage(): JSX.Element {
  const router = useRouter();
  const { data: defaultValue } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCHBOARD, {
    variables: { boardId: router.query.boardId as string },
  });
  console.log("?? : ", defaultValue);

  return <BoardWrite isEdit={true} defaultValue={defaultValue?.fetchBoard} />;
}
