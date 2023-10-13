import Image from "next/image";
import * as S from "./BoardDetail.styles";
import {
  ImageDefalutImage,
  ImageDefaultAvator,
  ImageDislike,
  ImageFile,
  ImageLike,
  ImageLocation,
} from "@/assets/images";

export default function BoardDetailUI(props: any) {
  const { data } = props;
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.Avatar>
              <S.Info>
                <Image src={ImageDefaultAvator} alt="" width={40} height={40} />
                <S.InfoText>
                  <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                  <S.CreateAt>DATE : {data?.fetchBoard?.createdAt}</S.CreateAt>
                </S.InfoText>
              </S.Info>
              <S.SubInfo>
                <Image src={ImageFile} alt="" width={25} height={25} />
                <Image src={ImageLocation} alt="" width={25} height={25} />
              </S.SubInfo>
            </S.Avatar>

            {/* <Image src={} alt="" /> */}
            {/* <Image src={} alt="" /> */}
          </S.Header>
          <S.Body>
            <S.BoardTitle>{data?.fetchBoard?.title}</S.BoardTitle>
            <S.ContnetImage>
              <Image src={ImageDefalutImage} alt="" fill />
            </S.ContnetImage>
            <S.BoardContents>{data?.fetchBoard?.contents}</S.BoardContents>
            <S.BoardVideo></S.BoardVideo>
          </S.Body>
          <S.Footer>
            <Image src={ImageLike} alt="" />
            <Image src={ImageDislike} alt="" />
          </S.Footer>
        </S.Content>
        <S.ButtonWarpper>
          <S.Button>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
        </S.ButtonWarpper>
      </S.Wrapper>
    </>
  );
}
