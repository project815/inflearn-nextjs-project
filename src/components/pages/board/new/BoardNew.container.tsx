import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardNew.query";
import { useEffect } from "react";
type ContentType = {
  writer: string;
  password: string;
  title: string;
  contents: string;
};
type PropsType = {
  isEdit: boolean;
  defaultValue: any;
};

export default function BoardWrite(props: PropsType) {
  const { isEdit, defaultValue } = props;

  const router = useRouter();
  const [createBoard] = useMutation(CREATEBOARD);
  const [updateBoard] = useMutation(UPDATEBOARD);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContentType>({
    defaultValues: {
      writer: defaultValue?.writer,
      password: "",
      title: defaultValue?.title,
      contents: defaultValue?.contents,
    },
  });

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const email = watch("writer");
  const password = watch("password");
  const title = watch("title");
  const contents = watch("contents");

  const validateConditions = () => {
    if (email) isEmailValid.test(email);
    isPasswordValid.test(password);

    return (
      isEmailValid &&
      isPasswordValid &&
      title?.length > 0 &&
      contents?.length > 0
    );
  };

  // useEffect(() => {
  //   if (isEdit) {
  //     setValue("title", defaultValue?.title);
  //     setValue("contents", defaultValue?.contents);
  //     console.log("랜더링");
  //   }
  // }, [defaultValue?.title, defaultValue?.contents]);

  const onSubmit = async (data: any) => {
    console.log("data : ", data);
    const { writer, password, title, contents } = data;
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

    console.log("result : ", result);
    router.push(`/board/`);
  };

  const onUpdateBoard = async (data: any) => {
    const { password, title, contents } = data;
    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!contents) {
      alert("제목을 입력해주세요.");
      return;
    }

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
      console.log("error : ", error);
    }
  };

  return (
    <BoardNewUI
      onSubmit={isEdit ? onUpdateBoard : onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      isActive={validateConditions()}
      isEdit={isEdit}
      defaultValue={defaultValue}
    />
  );
}
