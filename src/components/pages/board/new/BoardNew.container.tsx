import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardNew.query";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "@/types/graphql/types";
import { IBoardWritePropsType } from "./BoardNew.type";
import { useState } from "react";

export default function BoardWrite(props: IBoardWritePropsType): JSX.Element {
  const { isEdit, defaultValue } = props;

  console.log("default value : ", defaultValue);
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATEBOARD);

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [writerError, setWriterError] = useState<string>("");
  const [passwordError, setPasswordErorr] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const onChangeContents = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setContents(e.target.value);
  };

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onCreateBoard = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setWriter(writer ?? "");
    if (
      writer === "" ||
      !isEmailValid.test(writer) ||
      password === "" ||
      !isPasswordValid.test(password) ||
      title === "" ||
      contents === ""
    ) {
      writer === ""
        ? setWriterError("이름을 입력해주세요")
        : setWriterError("");

      !isEmailValid.test(writer)
        ? setWriterError("이메일 형식을 확인해주세요")
        : setWriterError("");
      password === ""
        ? setPasswordErorr("비밀번호를 입력해주세요.")
        : setPasswordErorr("");

      !isPasswordValid.test(password)
        ? setPasswordErorr("비밀번호 형식을 맞춰주세요.")
        : setPasswordErorr("");
      title === "" ? setTitleError("제목을 입력해주세요.") : setTitleError("");
      contents === ""
        ? setContentsError("내용을 입력해주새요,")
        : setContentsError("");

      return;
    }

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
        },
      },
    });

    console.log("result:", result);

    await router.push(`/board/`);
  };

  const onUpdateBoard = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (password === "") {
      setPasswordErorr("비밀번호를 입력해주세요.");
      return;
    }

    setPasswordErorr("");

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;

    try {
      if (typeof router.query.board === "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId as string,
          password,
          updateBoardInput,
        },
      });

      await router.push(`/board/${result?.data?.updateBoard?._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      // console.log(const date = new Date());
      // console.log(date.getFullYear());
      // console.log(date.getMonth());
      // console.log(date instanceof Date);
    }
  };

  return (
    <BoardNewUI
      isEdit={isEdit}
      defaultValue={defaultValue}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onSubmitBoard={isEdit ? onUpdateBoard : onCreateBoard}
      isActive={
        isEdit ||
        (writer !== "" && password !== "" && title !== "" && contents !== "")
      }
    />
  );
}
