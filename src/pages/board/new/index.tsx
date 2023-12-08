import { useForm } from "react-hook-form";
import {
  ContentTitle,
  ContentLayout,
  InputGroup,
  Label,
  WriterInputGroup,
  PasswordInputGroup,
  ContentInput,
  ContentTextInput,
  RowGroup,
  ZipcodeInput,
  ZipcodeButton,
  RowBetweenGroup,
  ImageUploadButton,
  ToggleInput,
  AddressInput,
  SubmitButton,
  ErrorMessage,
} from "../../../styles/boardreview";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATEBOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardPage() {
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
    router.push(`/boardreview/${result.data.createBoard._id}`);
  };

  return (
    <ContentLayout
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <ContentTitle>게시물 등록</ContentTitle>
      <RowBetweenGroup>
        <WriterInputGroup>
          <Label>작성자</Label>
          <ContentInput
            type="text"
            {...register("writer", {
              required: "작성자의 이메일을 입력해주세요.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: "이메일 형식이 아닙니다.",
              },
            })}
            placeholder="이름을 입력해주세요."
          />

          <ErrorMessage>{errors.writer?.message}</ErrorMessage>
        </WriterInputGroup>
        <PasswordInputGroup>
          <Label>비밀번호</Label>
          <ContentInput
            type="password"
            {...register("password", {
              required: "비밀번호을 입력해주세요.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            placeholder="비밀번호을 입력해주세요."
          ></ContentInput>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </PasswordInputGroup>
      </RowBetweenGroup>
      <InputGroup>
        <Label>제목</Label>
        <ContentInput
          placeholder="제목을 입력해주세요."
          {...register("title", {
            required: "제목을 입력해주세요.",
          })}
          //   onChange={onChangeContentTitle}
        ></ContentInput>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <Label>내용</Label>
        <ContentTextInput
          placeholder="내용을 입력해주세요."
          {...register("contents", {
            required: "내용을 입력해주세요.",
          })}
          //   onChange={onChangeContentText}
        ></ContentTextInput>
        <ErrorMessage>{errors.contents?.message}</ErrorMessage>
      </InputGroup>
      <InputGroup>
        <Label>주소</Label>
        <RowGroup>
          <ZipcodeInput />
          <ZipcodeButton>우편번호 검색</ZipcodeButton>
        </RowGroup>
        <AddressInput />
        <AddressInput />
      </InputGroup>
      <InputGroup>
        <Label>유튜브</Label>
        <ContentInput placeholder="제목을 입력해주세요."></ContentInput>
      </InputGroup>
      <InputGroup>
        <Label>사진첨부</Label>
        <RowGroup>
          <ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </ImageUploadButton>
          <ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </ImageUploadButton>
          <ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </ImageUploadButton>
        </RowGroup>
      </InputGroup>
      <InputGroup>
        <Label>매인 설정</Label>
        <RowGroup>
          <RowGroup>
            <ToggleInput type="radio" name="uploaddtype" />
            <Label>유튜브</Label>
          </RowGroup>
          <RowGroup>
            <ToggleInput type="radio" name="uploaddtype" />
            <Label>사진</Label>
          </RowGroup>
        </RowGroup>
      </InputGroup>
      <SubmitButton type="submit">등록하기</SubmitButton>
    </ContentLayout>
  );
}
