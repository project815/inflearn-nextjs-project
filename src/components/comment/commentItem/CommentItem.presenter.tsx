import { IBoardComment } from "@/types/graphql/types";
import { getToday } from "@/utility/common";
import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import {
  IconClear,
  IconDefaultUser,
  IconUpdate,
} from "../../../../public/assets/icon";
import * as S from "./CommentItem.styles";

export interface IBoardCommentListUIPropsType {
  data: IBoardComment;
  isEdit: boolean;
  onClickDeleteBoardComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickUpdateBoardComment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeModifiedComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickIsEdit: () => void;
  onChangeModifiedRating: (e: number) => void;
}

export default function CommentItemUI(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const {
    data,
    isEdit,
    onClickDeleteBoardComment,
    // onClickUpdateBoardComment,
    // onChangePassword,
    onChangeModifiedComment,
    onClickIsEdit,
    onChangeModifiedRating,
  } = props;

  return (
    <>
      <S.Comment key={data._id}>
        <S.AvatorImage src={IconDefaultUser} alt="" width={40} />

        <S.CommentGroup>
          <S.CommentUserInfoAndRateGroup>
            <S.CommenterWriper>{data.writer}</S.CommenterWriper>
            <S.CommentRate
              defaultValue={data.rating}
              disabled={!isEdit}
              onChange={onChangeModifiedRating}
            />
          </S.CommentUserInfoAndRateGroup>
          {isEdit ? (
            <S.CommentModifyInput
              defaultValue={data.contents}
              onChange={onChangeModifiedComment}
            />
          ) : (
            <S.CommentContent>{data.contents}</S.CommentContent>
          )}

          <S.CommentDate>{getToday(String(data.createdAt))}</S.CommentDate>
        </S.CommentGroup>

        <S.CommentModifyButtonGroup>
          <S.CommentModifyButton
            icon={
              isEdit ? <CheckOutlined /> : <Image src={IconUpdate} alt="" />
            }
            type="text"
            onClick={onClickIsEdit}
          ></S.CommentModifyButton>
          <S.CommentModifyButton
            type="text"
            id={data._id}
            onClick={onClickDeleteBoardComment}
          >
            <Image alt="" src={IconClear} />
          </S.CommentModifyButton>
        </S.CommentModifyButtonGroup>
      </S.Comment>
    </>
  );
}
