import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Control, useForm, useWatch } from "react-hook-form";
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD } from "./BoardNew.query";
import { useEffect, useState } from "react";

interface FormInputs {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function BoardNew() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATEBOARD);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
    },
  });
  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const email = watch("writer");
  const password = watch("password");
  const title = watch("title");
  const contents = watch("contents");

  const validateConditions = () => {
    isEmailValid.test(email);
    isPasswordValid.test(password);

    return (
      isEmailValid && isPasswordValid && title.length > 0 && contents.length > 0
    );
  };
  useEffect(() => {
    console.log("validateConditions() : ", validateConditions());
  }, [email, password, title, contents]);

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
    router.push(`/board/${result.data.createBoard._id}`);
  };

  return (
    <BoardNewUI
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      errors={errors}
      register={register}
      isActive={validateConditions()}
    />
  );
}
