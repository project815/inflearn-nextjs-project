import CommentItem from "@/components/units/CommentItem/CommentItem.container";
import type { IQuery } from "@/types/graphql/types";
import * as S from "./BoardCommentList.style";

export interface IBoardCommentListUIPropsType {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
}

export default function BoardCommentListUI(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { data } = props;

  return (
    <S.Wrapper>
      <S.Content>
        {data?.fetchBoardComments.map((i, index) => (
          <CommentItem key={i._id} data={i} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
}
