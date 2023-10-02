import { BoardContainer } from "@/styles/home";
import Image from "next/image";
import {
  Wrapper,
  Content,
  Header,
  Avatar,
  Info,
  InfoText,
  SubInfo,
  Writer,
  CreateAt,
  Body,
  BoardTitle,
  ContnetImage,
  BoardContents,
  BoardVideo,
  Footer,
  ButtonWarpper,
  Button,
} from "../../../styles/board";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  ImageDefalutImage,
  ImageDefaultAvator,
  ImageDislike,
  ImageFile,
  ImageLike,
  ImageLocation,
} from "@/assets/images";

const FETCHBOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardPage() {
  const router = useRouter();
  console.log(router.query);

  const { data } = useQuery(FETCHBOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  console.log(data);

  console.log(data?.fetchBoard.contents);

  return (
    <>
      <Wrapper>
        <Content>
          <Header>
            <Avatar>
              <Info>
                <Image src={ImageDefaultAvator} alt="" width={40} height={40} />
                <InfoText>
                  <Writer>{data?.fetchBoard.writer}</Writer>
                  <CreateAt>DATE : {data?.fetchBoard.createdAt}</CreateAt>
                </InfoText>
              </Info>
              <SubInfo>
                <Image src={ImageFile} alt="" width={25} height={25} />
                <Image src={ImageLocation} alt="" width={25} height={25} />
              </SubInfo>
            </Avatar>

            {/* <Image src={} alt="" /> */}
            {/* <Image src={} alt="" /> */}
          </Header>
          <Body>
            <BoardTitle>{data?.fetchBoard.title}</BoardTitle>
            <ContnetImage>
              <Image src={ImageDefalutImage} alt="" fill />
            </ContnetImage>
            <BoardContents>{data?.fetchBoard.contents}</BoardContents>
            <BoardVideo></BoardVideo>
          </Body>
          <Footer>
            <Image src={ImageLike} alt="" />
            <Image src={ImageDislike} alt="" />
          </Footer>
        </Content>
        <ButtonWarpper>
          <Button>목록으로</Button>
          <Button>수정하기</Button>
          <Button>삭제하기</Button>
        </ButtonWarpper>
      </Wrapper>
    </>
  );
}
