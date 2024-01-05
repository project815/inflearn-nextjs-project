import {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "@/types/graphql/types";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";
import BoardCreateAndUpdateUI from "./BoardCreateAndUpdate.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardCreateAndUpdate.query";
import { IBoardWritePropsType } from "./BoardCreateAndUpdate.type";

export default function BoardCreateAndUpadate(
  props: IBoardWritePropsType
): JSX.Element {
  const { isEdit, defaultValue } = props;
  const { confirm } = Modal;

  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATEBOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATEBOARD);

  const [createBoardInput, setCreateBoardInput] = useState<ICreateBoardInput>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    boardAddress: {},
  });

  const [writerError, setWriterError] = useState<string>("");
  const [passwordError, setPasswordErorr] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");

  const onChangeBoardAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCreateBoardInput((prev) => {
      return {
        ...prev,
        boardAddress: {
          ...createBoardInput.boardAddress,
          addressDetail: e.target.value,
        },
      };
    });
  };

  const onChangeBoardInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setCreateBoardInput((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  // 주소 등록
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const onClickAddressModal = async (): Promise<void> => {
    await open({ onComplete: handleComplete });
  };

  const handleComplete = (data: Address): void => {
    setCreateBoardInput((prev) => {
      return {
        ...prev,
        boardAddress: {
          address: data.address,
          addressDetail: "",
          zipcode: data.zonecode,
        },
      };
    });
  };

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onCreateBoard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    if (
      createBoardInput.writer === "" ||
      !isEmailValid.test(String(createBoardInput.writer)) ||
      createBoardInput.password === "" ||
      !isPasswordValid.test(String(createBoardInput.password)) ||
      createBoardInput.title === "" ||
      createBoardInput.contents === ""
    ) {
      createBoardInput.writer === ""
        ? setWriterError("이름을 입력해주세요")
        : setWriterError("");

      !isEmailValid.test(String(createBoardInput.writer))
        ? setWriterError("이메일 형식을 확인해주세요")
        : setWriterError("");
      createBoardInput.password === ""
        ? setPasswordErorr("비밀번호를 입력해주세요.")
        : setPasswordErorr("");

      !isPasswordValid.test(String(createBoardInput.password))
        ? setPasswordErorr("비밀번호 형식을 맞춰주세요.")
        : setPasswordErorr("");
      createBoardInput.title === ""
        ? setTitleError("제목을 입력해주세요.")
        : setTitleError("");
      createBoardInput.contents === ""
        ? setContentsError("내용을 입력해주새요,")
        : setContentsError("");

      return;
    }
    console.log("??boardAddress :", createBoardInput.boardAddress);

    await createBoard({
      variables: {
        createBoardInput,
      },
    });

    confirm({
      icon: <CheckCircleOutlined style={{ color: "green" }} />,
      content: "게시물이 등록되었습니다.",
      onOk() {
        router.push(`/board/`);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const onUpdateBoard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    if (createBoardInput.password === "") {
      setPasswordErorr("비밀번호를 입력해주세요.");
      return;
    }

    setPasswordErorr("");

    const updateBoardInput: IUpdateBoardInput = {};
    if (createBoardInput.title !== "")
      updateBoardInput.title = createBoardInput.title;
    if (createBoardInput.contents !== "")
      updateBoardInput.contents = createBoardInput.contents;
    if (
      createBoardInput.boardAddress?.address !== "" ||
      createBoardInput.boardAddress.addressDetail !== "" ||
      createBoardInput.boardAddress.zipcode !== ""
    )
      updateBoardInput.boardAddress = { ...createBoardInput.boardAddress };

    try {
      if (typeof router.query.board === "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId as string,
          password: createBoardInput.password,
          updateBoardInput,
        },
      });

      confirm({
        icon: <CheckCircleOutlined style={{ color: "green" }} />,
        content: "게시물이 수정되었습니다..",
        onOk() {
          router.push(`/board/${result?.data?.updateBoard?._id}`);
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <BoardCreateAndUpdateUI
        isEdit={isEdit}
        defaultValue={defaultValue}
        boardAddress={createBoardInput.boardAddress}
        onChangeBoardInput={onChangeBoardInput}
        onChangeBoardAddress={onChangeBoardAddress}
        onClickAddressModal={onClickAddressModal}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onSubmitBoard={isEdit ? onUpdateBoard : onCreateBoard}
        isActive={
          isEdit ||
          (createBoardInput.writer !== "" &&
            createBoardInput.password !== "" &&
            createBoardInput.title !== "" &&
            createBoardInput.contents !== "")
        }
      />
    </>
  );
}
