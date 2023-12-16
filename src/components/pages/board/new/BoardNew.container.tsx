import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardNew.query";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "@/types/graphql/types";
import { IBoardWritePropsType } from "./BoardNew.type";
import { useState } from "react";

export default function BoardWrite(props: IBoardWritePropsType) {
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

  const onChangeWriter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onCreateBoard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !writer ||
      !isEmailValid.test(writer) ||
      !password ||
      !isPasswordValid.test(password) ||
      !title ||
      !contents
    ) {
      !writer ? setWriterError("이름을 입력해주세요") : setWriterError("");

      !isEmailValid.test(writer)
        ? setWriterError("이메일 형식을 확인해주세요")
        : setWriterError("");
      !password
        ? setPasswordErorr("비밀번호를 입력해주세요.")
        : setPasswordErorr("");

      !isPasswordValid.test(password)
        ? setPasswordErorr("비밀번호 형식을 맞춰주세요.")
        : setPasswordErorr("");
      !title ? setTitleError("제목을 입력해주세요.") : setTitleError("");
      !contents
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

    router.push(`/board/`);
  };

  const onUpdateBoard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password) {
      setPasswordErorr("비밀번호를 입력해주세요.");
      return;
    }

    setPasswordErorr("");

    const newVariables: {
      updateBoardInput: {
        title?: string;
        contents?: string;
      };
      password: string;
      boardId: any;
    } = {
      updateBoardInput: {},
      password: password,
      boardId: router.query.boardId,
    };
    if (title) newVariables.updateBoardInput.title = title;
    if (contents) newVariables.updateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: newVariables,
      });

      router.push(`/board/${result?.data?.updateBoard?._id}`);
    } catch (error) {
      alert("비밀 번호를 입력해주세요.");
      console.log("error : ", error);
    }
  };
  console.log(
    "writer && password && title && contents: ",
    writer && password && title && contents ? true : false
  );

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
      isActive={writer && password && title && contents ? true : false}
    />
  );
}
