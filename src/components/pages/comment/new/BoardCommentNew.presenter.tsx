import Image from "next/image";
import * as S from "./BoardCommentNew.style";
import { IconComment, IconDefaultUser } from "@/assets/icon/indext";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATEBOARDCOMMENT,
  FETCHBOARDCOMMENTS,
} from "./BoardCommentNew.query";
import { useState } from "react";
import { useRouter } from "next/router";
import { Rate } from "antd";
import { getToday } from "@/utility/common";

type CreateBoardCommentInput = {
  writer: string;
  password: string;
  contents: string;
  rating: number;
};

export default function BoardCommentUI() {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [rating, setRating] = useState<number>(3);

  const [createBoardComment] = useMutation(CREATEBOARDCOMMENT);

  const { data } = useQuery(FETCHBOARDCOMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const onClickCreateBoardComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [FETCHBOARDCOMMENTS],
      });
      setWriter("");
      setPassword("");
      setContents("");
      setRating(3);
      alert("댓글이 등록되었습니다.");
    } catch (err) {
      console.log("error : ", err);
      alert("댓글이 실패했습니다." + err);
    }
  };

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.CommentHeader>
          <Image src={IconComment} alt="" />
          <S.Title>댓글</S.Title>
          <Rate
            value={rating}
            allowHalf
            defaultValue={2.5}
            onChange={setRating}
          />
          <S.WriterInput
            value={writer}
            placeholder="작성자"
            type="text"
            onChange={onChangeWriter}
          />
          <S.PasswordInput
            value={password}
            placeholder="비밀번호"
            type="password"
            onChange={onChangePassword}
          />
        </S.CommentHeader>
        <S.CommentTextBox
          value={contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후  삭제될 수 있으면, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={onChangeContents}
        />
        <S.CommentBody>
          <span style={{}}>{contents.length} / 100</span>
          <button onClick={onClickCreateBoardComment}> 등록하기</button>
        </S.CommentBody>
      </S.Content>
      <div>
        {data &&
          data?.fetchBoardComments.map((data: any) => (
            <div>
              <Image src={IconDefaultUser} alt="" />
              <div>{data.name}</div>
              <Rate defaultValue={data.rating} disabled />
              <div>{data.contents}</div>
              <div>{getToday(data.createdAt)}</div>
            </div>
          ))}
      </div>
    </S.Wrapper>
  );
}
