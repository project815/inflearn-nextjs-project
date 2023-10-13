import { CreateBoardInput } from "@/types/Board";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CREATEBOARD } from "./BoardRegister.queries";
import BoardRegisterUI from "./BoardRegister.presenter";

export default function BoardRegister() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBoardInput>({
    defaultValues: {},
  });

  const [createBoard] = useMutation(CREATEBOARD);

  const onSubmit = async (data: any) => {
    const { writer, password, title, contents } = data;

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });

      console.log(result.data.createBoard._id);
      router.push(`${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BoardRegisterUI
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
      />
    </>
  );
}
