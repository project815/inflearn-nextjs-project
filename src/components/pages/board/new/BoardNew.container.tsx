import {
  IBoardAddressInput,
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
import BoardNewUI from "./BoardNew.presenter";
import { CREATEBOARD, UPDATEBOARD } from "./BoardNew.query";
import { IBoardWritePropsType } from "./BoardNew.type";

export default function BoardWrite(props: IBoardWritePropsType): JSX.Element {
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

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [youtubeUrl, setYouTubeUrl] = useState<string>();
  const [boardAddress, setBoardAddress] = useState<IBoardAddressInput>({});
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
  const onChangeYoutubeUrl = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(e.target.value);
    setYouTubeUrl(e.target.value);
  };

  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const onClickAddressModal = async (): Promise<void> => {
    await open({ onComplete: handleComplete });
  };

  const handleComplete = (data: Address): void => {
    let fullAddress = data.address;

    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setBoardAddress({
      address: data.address,
      addressDetail: "",
      zipcode: data.zonecode,
    });

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
  const onChangeBoardAddress = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBoardAddress((prev) => ({
      ...prev,
      addressDetail: e.target.value,
    }));
  };

  const isEmailValid = /\S+@\S+\.\S+/;
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const onCreateBoard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
    console.log("boardAddress : ", boardAddress);

    await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password,
          title,
          contents,
          youtubeUrl,
          boardAddress,
        },
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
    if (password === "") {
      setPasswordErorr("비밀번호를 입력해주세요.");
      return;
    }

    setPasswordErorr("");

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    // if (boardAddress !== "") updateBoardInput.boardAddress = boardAddress;

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
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      <BoardNewUI
        isEdit={isEdit}
        defaultValue={defaultValue}
        boardAddress={boardAddress}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        onChangeBoardAddress={onChangeBoardAddress}
        onClickAddressModal={onClickAddressModal}
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
    </>
  );
}
