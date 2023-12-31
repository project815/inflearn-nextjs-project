import { getToday } from "@/utility/common";
import Image from "next/image";
import {
  ImageBoardDetail,
  ImageDefaultAvator,
  ImageDislike,
  ImageFile,
  ImageLike,
  ImageLocation,
} from "../../../../public/assets/images";
import * as S from "./BoardDetail.style";
import { IBoardDetailUIPropstype } from "./BoardDetail.type";

export default function BoardDetailUI(
  props: IBoardDetailUIPropstype
): JSX.Element {
  const { data, onClickMoveToBoardList, onClickMoveToBoardEdit } = props;

  return (
    <S.Wrapper>
      <S.BoardTitle>제목 : {data?.fetchBoard.title}</S.BoardTitle>

      <S.Content>
        <S.Header>
          <S.Avatar>
            <S.Info>
              <S.AvatorImage
                src={ImageDefaultAvator}
                alt=""
                width={40}
                height={40}
              />
              <S.InfoText>
                <S.Writer>{data?.fetchBoard?.writer}</S.Writer>
                <S.CreateAt>
                  DATE : {getToday(String(data?.fetchBoard?.createdAt))}
                </S.CreateAt>
              </S.InfoText>
            </S.Info>
            <S.SubInfo>
              <Image src={ImageFile} alt="" width={25} height={25} />
              <S.AddressTooltip
                color="gray"
                placement="left"
                title={
                  data?.fetchBoard.boardAddress?.address ??
                  "주소 데이터가 없습니다."
                }
              >
                <Image src={ImageLocation} alt="" width={25} height={25} />
              </S.AddressTooltip>
            </S.SubInfo>
          </S.Avatar>
        </S.Header>
        <S.Body>
          <S.ContnetImage src={ImageBoardDetail} alt="" />
          <S.BoardContents>{data?.fetchBoard?.contents}</S.BoardContents>
          <S.BoardVideo>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=gudwFBgQdYY"
            />
          </S.BoardVideo>
        </S.Body>
        <S.Footer>
          <S.LikeButtonGroup>
            <S.LikeButton>
              <Image src={ImageLike} alt="" />
            </S.LikeButton>
            <span style={{ color: "#ffd600" }}>1920</span>
          </S.LikeButtonGroup>

          <S.LikeButtonGroup>
            <S.LikeButton>
              <Image src={ImageDislike} alt="" />
            </S.LikeButton>
            <span>1920</span>
          </S.LikeButtonGroup>
        </S.Footer>
      </S.Content>
      <S.ButtonWarpper>
        <S.MenuButton onClick={onClickMoveToBoardList}>목록으로</S.MenuButton>
        <S.MenuButton onClick={onClickMoveToBoardEdit}>수정하기</S.MenuButton>
        <S.MenuButton>삭제하기</S.MenuButton>
        {/* <Quiz03_02 /> */}
      </S.ButtonWarpper>
    </S.Wrapper>
  );
}
