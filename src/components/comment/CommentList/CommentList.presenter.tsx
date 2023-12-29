import Image from "next/image";
import { IconClear, IconUpdate } from "../../../../public/assets/icon";
import { ImageDefaultAvator } from "../../../../public/assets/images";
import * as S from "./CommentList.styles";

export default function CommentListUI(): JSX.Element {
  return (
    <S.CommentListWrapper>
      <S.Avator>
        <Image src={ImageDefaultAvator} alt="" />
      </S.Avator>
      <S.InfoGroup>
        <S.RowGroup>
          <S.Name>이름</S.Name>
          <S.CommentRate disabled />
        </S.RowGroup>
        <S.CommentContent>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </S.CommentContent>
        <S.CommentDate>날짜</S.CommentDate>
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
  );
}
