import { BoardContainer } from "@/styles/home";
import Image from "next/image";
import {
  Warpper,
  Header,
  Writer,
  CreateAt,
  Body,
  BoardTitle,
  BoardContents,
  BoardVideo,
  Footer,
} from "../../../styles/board";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ImageUser } from "@/assets/images";

const FETCHBOARD = gql`
  query {
    fetchBoard(boardId: "651ab4a9bfc0f900299a8493") {
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
      <Warpper>
        <Header>
          <Image src={ImageUser} alt="" />
          <Writer>{data?.fetchBoard.writer}</Writer>
          <CreateAt>{data?.fetchBoard.createdAt}</CreateAt>
          {/* <Image src={} alt="" /> */}
          {/* <Image src={} alt="" /> */}
        </Header>
        <Body>
          <BoardTitle>{data?.fetchBoard.title}</BoardTitle>
          {/* <Image src={} alt="" /> */}

          <BoardContents>{data?.fetchBoard.contents}</BoardContents>
          <BoardVideo></BoardVideo>
        </Body>
        <Footer>
          {/* <Image src={} alt="" /> */}
          {/* <Image src={} alt="" /> */}
        </Footer>
      </Warpper>
    </>
  );
}
