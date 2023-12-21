import { IBoardComment } from "@/types/graphql/types";
import { getToday } from "@/utility/common";
import { Button, Rate } from "antd";
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
    <>
      <S.Wrapper>
        <S.Content>
          {data?.map((data: any) => (
            <S.Comment key={data._id}>
              <S.CommentUserInfoGroup>
                <S.CommentUserInfoGroup>
                  <Image src={IconDefaultUser} alt="" />
                  <S.CommenterWriper>{data.writer}</S.CommenterWriper>
                  <Rate defaultValue={data.rating} disabled />
                </S.CommentUserInfoGroup>
                <span>
                  <Button type="text">
                    <Image src={IconUpdate} alt="" />
                  </Button>
                  <Button
                    type="text"
                    id={data._id}
                    onClick={onClickDeleteBoardComment}
                  >
                    <Image alt="" src={IconClear} />
                  </Button>
                </span>
              </S.CommentUserInfoGroup>
              <S.CommentContent>{data.contents}</S.CommentContent>
              <S.CommentDate>{getToday(String(data.createdAt))}</S.CommentDate>
            </S.Comment>
          ))}
        </S.Content>
      </S.Wrapper>
    </>
  );
}
