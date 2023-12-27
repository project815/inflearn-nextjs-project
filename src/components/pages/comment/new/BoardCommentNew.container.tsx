import { IMutation } from "@/types/graphql/types";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCHBOARDCOMMENTS } from "../list/BoardCommentList.query";
import BoardCommentUI from "./BoardCommentNew.presenter";
import { CREATEBOARDCOMMENT } from "./BoardCommentNew.query";
import { ICommentInputType } from "./BoardCommentNew.types";

export default function BoardComment(): JSX.Element {
  const router = useRouter();
  const { confirm } = Modal;

  const [commentInput, setCommentInput] = useState<ICommentInputType>({
    writer: "",
    password: "",
    contents: "",
    rating: 3,
  });

  const [rating, setRating] = useState<number>(3);

  const [createBoardComment] =
    useMutation<Pick<IMutation, "createBoardComment">>(CREATEBOARDCOMMENT);

  const onClickCreateBoardComment = async (): Promise<void> => {
    if (
      commentInput.writer === "" ||
      commentInput.password === "" ||
      commentInput.contents === ""
    ) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    setCommentInput((prev) => ({
      ...prev,
      rating,
    }));

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            ...commentInput,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [FETCHBOARDCOMMENTS],
      });

      setCommentInput({
        writer: "",
        password: "",
        contents: "",
        rating: 3,
      });

      confirm({
        icon: <CheckCircleOutlined style={{ color: "green" }} />,
        content: "댓글이 등록되었습니다.",
        onOk() {},
      });
    } catch (err) {
      console.log("error : ", err);
    }
  };

  const onChangeInnput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCommentInput((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  console.log(" data?.fetchBoardComments: ");
  return (
    <BoardCommentUI
      commentInput={commentInput}
      rating={rating}
      setRating={setRating}
      onChangeInnput={onChangeInnput}
      onClickCreateBoardComment={onClickCreateBoardComment}
    />
  );
}
