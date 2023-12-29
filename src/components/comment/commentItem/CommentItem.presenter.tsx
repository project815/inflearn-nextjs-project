import { IBoardComment } from "@/types/graphql/types";
import { getToday } from "@/utility/common";
import Image from "next/image";
import { IconClear, IconUpdate } from "../../../../public/assets/icon";
import { ImageDefaultAvator } from "../../../../public/assets/images";
import * as S from "./CommentItem.styles";

export interface IBoardCommentListUIPropsType {
  comment: IBoardComment;
  onClickDeleteBoardComment: () => Promise<void>;
}

export default function CommentItemUI(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { comment, onClickDeleteBoardComment } = props;

  return (
    <>
      <S.CommentListWrapper>
        <S.Avator>
          <Image src={ImageDefaultAvator} alt="" />
        </S.Avator>
        <S.InfoGroup>
          <S.RowGroup>
            <S.Name>{comment.writer}</S.Name>
            <S.CommentRate disabled value={comment.rating} />
          </S.RowGroup>
          <S.CommentContent>{comment.contents}</S.CommentContent>
          <S.CommentDate>{getToday(String(comment.createdAt))}</S.CommentDate>
        </S.InfoGroup>
        <S.UpdateButtonGroup>
          <S.UpdateButton>
            <Image src={IconUpdate} alt="" />
          </S.UpdateButton>
          <S.UpdateButton onClick={onClickDeleteBoardComment}>
            <Image src={IconClear} alt="" />
          </S.UpdateButton>
        </S.UpdateButtonGroup>
      </S.CommentListWrapper>
    </>
  );
}
