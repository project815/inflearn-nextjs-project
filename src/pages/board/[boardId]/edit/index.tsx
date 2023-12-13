import { FETCHBOARD } from "@/components/pages/board/detail/BoardDetail.query";
import BoardWrite from "@/components/pages/board/new/BoardNew.container";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardUpdatePage() {
  const router = useRouter();
  const { data: defaultValue } = useQuery(FETCHBOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={true} defaultValue={defaultValue?.fetchBoard} />;
}
