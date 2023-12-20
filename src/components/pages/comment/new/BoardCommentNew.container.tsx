import { IMutation } from "@/types/graphql/types";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCHBOARDCOMMENTS } from "../list/BoardCommentList.query";
import BoardCommentUI from "./BoardCommentNew.presenter";
import { CREATEBOARDCOMMENT } from "./BoardCommentNew.query";

export default function BoardComment(): JSX.Element {
  const router = useRouter();
  const { confirm } = Modal;

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [rating, setRating] = useState<number>(3);

  const [createBoardComment] =
    useMutation<Pick<IMutation, "createBoardComment">>(CREATEBOARDCOMMENT);

  const onClickCreateBoardComment = async (): Promise<void> => {
    if (writer === "" || password === "" || contents === "") {
      alert("빈칸을 모두 채워주세요.");
      return;
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [FETCHBOARDCOMMENTS],
      });
      setWriter("");
      setPassword("");
      setContents("");
      setRating(3);

      confirm({
        icon: <CheckCircleOutlined style={{ color: "green" }} />,
        content: "댓글이 등록되었습니다.",
        onOk() {},
      });
      // alert("댓글이 등록되었습니다.");
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onChangeContents = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContents(e.target.value);
  };

  console.log(" data?.fetchBoardComments: ");
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
    />
  );
}
