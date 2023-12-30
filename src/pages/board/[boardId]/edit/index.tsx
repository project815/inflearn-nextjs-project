import BoardCreateAndUpdate from "@/components/board/BoardCreateAndUpdate/BoardCreateAndUpdate.container";
import { FETCHBOARD } from "@/components/board/BoardCreateAndUpdate/BoardCreateAndUpdate.query";
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

  return (
    <BoardCreateAndUpdate
      isEdit={true}
      defaultValue={defaultValue?.fetchBoard}
    />
  );
}
