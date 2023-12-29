import Image from "next/image";
import { IconComment } from "../../../../public/assets/icon";
import * as S from "./CommentMutation.styles";

export default function CommentMutationUI(): JSX.Element {
  return (
    <>
      <S.CommentWrapper>
        <S.CommentTitleGroup>
          <Image src={IconComment} alt="" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentTitleGroup>
        <S.RowGroup>
          <S.CommentInput type="text" />
          <S.CommentInput type="password" />
          <S.CommentRate />
        </S.RowGroup>
        <S.CommentTextarea />
        <S.Border>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.Border>
      </S.CommentWrapper>
      <></>
    </>
  );
}
