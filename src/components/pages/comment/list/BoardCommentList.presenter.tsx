import { IBoardComment } from "@/types/graphql/types";
import { getToday } from "@/utility/common";
import Image from "next/image";
import {
  IconClear,
  IconDefaultUser,
  IconUpdate,
} from "../../../../../public/assets/icon";
import * as S from "./BoardCommentList.style";

interface IBoardCommentListUIPropsType {
  data: IBoardComment[] | undefined;
  onClickDeleteBoardComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BoardCommentListUI(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { data, onClickDeleteBoardComment } = props;

  return (
    <S.Wrapper>
      <S.Content>
        {data?.map((data: any, index) => (
          <S.Comment key={data._id}>
            <S.AvatorImage src={IconDefaultUser} alt="" width={40} />

            <S.CommentGroup>
              <S.CommentUserInfoAndRateGroup>
                <S.CommenterWriper>{data.writer}</S.CommenterWriper>
                <S.CommentRate defaultValue={data.rating} disabled />
              </S.CommentUserInfoAndRateGroup>

              <S.CommentContent>{data.contents}</S.CommentContent>
              <S.CommentModifyInput />
              <S.CommentDate>{getToday(String(data.createdAt))}</S.CommentDate>
            </S.CommentGroup>

            <S.CommentModifyButtonGroup>
              <S.CommentModifyButton type="text">
                <Image src={IconUpdate} alt="" />
              </S.CommentModifyButton>
              <S.CommentModifyButton
                type="text"
                id={data._id}
                onClick={onClickDeleteBoardComment}
              >
                <Image alt="" src={IconClear} />
              </S.CommentModifyButton>
            </S.CommentModifyButtonGroup>
          </S.Comment>
        ))}
      </S.Content>
    </S.Wrapper>
  );
}
