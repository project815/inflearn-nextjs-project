import Image from "next/image";
import * as S from "./BoardCommentNew.style";
import {
  IconClear,
  IconComment,
  IconDefaultUser,
  IconUpdate,
} from "@/assets/icon";

import { Button, Rate } from "antd";
import { getToday } from "@/utility/common";
import { IBoardComment } from "@/types/graphql/types";

export interface IBoardCommentUIPropsType {
  rating: number;
  writer: string;
  password: string;
  contents: string;
  setRating: (value: number) => void;
  onChangeWriter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreateBoardComment: () => void;
}

export default function BoardCommentUI(props: IBoardCommentUIPropsType) {
  const {
    rating,
    writer,
    password,
    contents,
    setRating,
    onChangeWriter,
    onChangePassword,
    onChangeContents,
    onClickCreateBoardComment,
  } = props;
  return (
    <div>
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
      </S.Wrapper>
    </div>
  );
}
