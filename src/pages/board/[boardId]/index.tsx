import Image from "next/image";
import {
  Wrapper,
  Header,
  Content,
  Avatar,
  Info,
  SubInfo,
  Body,
  BoardTitle,
  ContnetImage,
  BoardContents,
  BoardVideo,
  Footer,
  ButtonWarpper,
  Button,
  InfoText,
  Writer,
  CreateAt,
} from "../../../styles/boarddetail.js";
import {
  ImageDefalutImage,
  ImageDefaultAvator,
  ImageDislike,
  ImageFile,
  ImageLike,
  ImageLocation,
} from "@/assets/images";
import { useRouter } from "next/router.js";
import { gql, useQuery } from "@apollo/client";

const FETCHBOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
    }
  }
`;
export default function BoardDetailUI(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCHBOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log(router.query.boardId);
  return (
    <div>
      <Wrapper>
        <Content>
          <Header>
            <Avatar>
              <Info>
                <Image src={ImageDefaultAvator} alt="" width={40} height={40} />
                <InfoText>
                  <Writer>{data?.fetchBoard?.writer}</Writer>
                  <CreateAt>DATE : {data?.fetchBoard?.createdAt}</CreateAt>
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
            <BoardTitle>{data?.fetchBoard?.title}</BoardTitle>
            <ContnetImage>
              <Image src={ImageDefalutImage} alt="" fill />
            </ContnetImage>
            <BoardContents>{data?.fetchBoard?.contents}</BoardContents>
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
    </div>
  );
}
