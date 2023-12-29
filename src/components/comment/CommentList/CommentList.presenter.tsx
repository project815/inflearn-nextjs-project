import { IQuery } from "@/types/graphql/types";
import { getToday } from "@/utility/common";
import Image from "next/image";
import { IconClear, IconUpdate } from "../../../../public/assets/icon";
import { ImageDefaultAvator } from "../../../../public/assets/images";
import * as S from "./CommentList.styles";

interface ICommentListPropsType {
  commentList?: Pick<IQuery, "fetchBoardComments">;
}
export default function CommentListUI(
  props: ICommentListPropsType
): JSX.Element {
  const { commentList } = props;
  return (
    <>
      {commentList?.fetchBoardComments.map((data) => (
        <>
          <S.CommentListWrapper>
            <S.Avator>
              <Image src={ImageDefaultAvator} alt="" />
            </S.Avator>
            <S.InfoGroup>
              <S.RowGroup>
                <S.Name>{data.writer}</S.Name>
                <S.CommentRate disabled value={data.rating} />
              </S.RowGroup>
              <S.CommentContent>{data.contents}</S.CommentContent>
              <S.CommentDate>{getToday(String(data.createdAt))}</S.CommentDate>
            </S.InfoGroup>
            <S.UpdateButtonGroup>
              <S.UpdateButton>
                <Image src={IconUpdate} alt="" />
              </S.UpdateButton>
              <S.UpdateButton>
                <Image src={IconClear} alt="" />
              </S.UpdateButton>
            </S.UpdateButtonGroup>
          </S.CommentListWrapper>
        </>
      ))}
    </>
  );
}
