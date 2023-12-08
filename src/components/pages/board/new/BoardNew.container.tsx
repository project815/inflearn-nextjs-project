import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD } from "./BoardNew.query";

export default function BoardNew() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATEBOARD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
    },
  });

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
    />
  );
}
