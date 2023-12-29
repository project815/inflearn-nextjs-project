import {
  ICreateBoardCommentInput,
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "@/types/graphql/types";
import { useMutation } from "@apollo/client";
import { Alert } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import CommentCreateAndUpdateUI from "./CommentCreateAndUpdate.presenter";
import { CREATEBOARDCOMMENT } from "./CommentCreateAndUpdate.query";

export default function CommentCreateAndUpdate(): JSX.Element {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATEBOARDCOMMENT);

  const [createBoardCommentInput, setCreateBoardCommentInput] =
    useState<ICreateBoardCommentInput>({
      writer: "",
      password: "",
      contents: "",
      rating: 3,
    });

  const onChangeCommentInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCreateBoardCommentInput((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onChangeRate = (e: number): void => {
    setCreateBoardCommentInput((prev) => ({
      ...prev,
      rating: e,
    }));
  };

  const onClickCreateComment = async (): Promise<void> => {
    console.log("???");
    if (createBoardCommentInput.writer === "") {
      toast.warning("작성자를 입력해주세요.");
      return;
    }
    if (createBoardCommentInput.password === "") {
      toast.warning("비밀번호를 입력해주세요.");
      return;
    }
    if (createBoardCommentInput.contents === "") {
      toast.warning("내용을 입력해주세요.");
      return;
    }
    if (createBoardCommentInput.rating === 0) {
      toast.warning("평점을 입력해주세요.");
      return;
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput,
          boardId: String(router.query.boardId),
        },
        refetchQueries: ["fetchBoardComments"],
      });

      setCreateBoardCommentInput({
        writer: "",
        password: "",
        contents: "",
        rating: 3,
      });
      toast.success("댓글이 등록되었습니다.");
    } catch (err) {
      toast.error("댓글 등록이 실패했습니다.");
    }
  };

  return (
    <>
      <CommentCreateAndUpdateUI
        createBoardCommentInput={createBoardCommentInput}
        onChangeCommentInput={onChangeCommentInput}
        onChangeRate={onChangeRate}
        onClickCreateComment={onClickCreateComment}
      />
      <Alert
        message="Warning Text"
        type="warning"
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
        }}
      />
    </>
  );
}
