import BoardCommentUI from "./BoardCommentNew.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATEBOARDCOMMENT,
  FETCHBOARDCOMMENTS,
} from "./BoardCommentNew.query";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "@/types/graphql/types";

export default function BoardComment() {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [rating, setRating] = useState<number>(3);

  const [createBoardComment] =
    useMutation<Pick<IMutation, "createBoardComment">>(CREATEBOARDCOMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCHBOARDCOMMENTS, {
    variables: {
      boardId: router.query.boardId as string,
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

  console.log(" data?.fetchBoardComments: ", data?.fetchBoardComments);
  return (
    <BoardCommentUI
      rating={rating}
      writer={writer}
      password={password}
      contents={contents}
      setRating={setRating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickCreateBoardComment={onClickCreateBoardComment}
      data={data?.fetchBoardComments}
    />
  );
}
