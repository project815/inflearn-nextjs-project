import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCHBOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCHBOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <BoardDetailUI data={data} />
    </>
  );
}
