import { IconClear, IconDefaultUser, IconUpdate } from "@/assets/icon";
import * as S from "./BoardCommentList.style";
import Image from "next/image";
import { Button, Rate } from "antd";
import { getToday } from "@/utility/common";
import { IBoardComment } from "@/types/graphql/types";

interface IBoardCommentListUIPropsType {
  data: IBoardComment[] | undefined;
}

export default function BoardCommentListUI(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { data } = props;

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
                  <Button type="text">
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
