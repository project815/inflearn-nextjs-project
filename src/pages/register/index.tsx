import { useState } from "react";
import {
  Title,
  BoardContainer,
  UserInputContainer,
  InputContainer,
  Label,
  WriterInput,
  PasswordInput,
  ContentTitleInput,
  ContentInput,
  ZipCodeSearchContainer,
  ZipCodeInput,
  ZipCodeSearchBtn,
  AddressInput,
  AddressDetailInput,
  YoutubeInput,
  ImageUploadContainer,
  ImageUploadInput,
  RadioInputContainer,
  RadioInput,
  RegisterBtn,
  RequiredError,
} from "../../styles/home";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

type CreateBoardInput = {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddressInput;
  images?: [string];
};

type BoardAddressInput = {
  zipcode: string;
  address: string;
  addressDetail: string;
};

const CREATEBOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
    }
  }
`;

export default function RegisterBoardPage() {
  const [registerContent, setRegisterContent] = useState<CreateBoardInput>({});

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BoardContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>게시물 등록</Title>
        <UserInputContainer>
          <InputContainer>
            <Label>작성자</Label>
            <WriterInput
              type="email"
              {...register("writer", { required: "Email is required" })}
            />
            <RequiredError>{errors.writer?.message}</RequiredError>
          </InputContainer>
          <InputContainer>
            <Label>비밀번호</Label>
            <PasswordInput
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            <RequiredError>{errors.password?.message}</RequiredError>
          </InputContainer>
        </UserInputContainer>

        <InputContainer>
          <Label>제목</Label>
          <ContentTitleInput
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          <RequiredError>{errors.title?.message}</RequiredError>
        </InputContainer>

        <InputContainer>
          <Label>내용</Label>
          <ContentInput
            type="type"
            {...register("contents", { required: "Contents is required" })}
          />
          <RequiredError>{errors.contents?.message}</RequiredError>
        </InputContainer>

        <InputContainer>
          <Label>주소</Label>
          <ZipCodeSearchContainer>
            <ZipCodeInput></ZipCodeInput>
            <ZipCodeSearchBtn>우편번호 검색</ZipCodeSearchBtn>
          </ZipCodeSearchContainer>
          <AddressInput></AddressInput>
          <AddressDetailInput></AddressDetailInput>
        </InputContainer>

        <InputContainer>
          <Label>유튜브</Label>
          <YoutubeInput></YoutubeInput>
        </InputContainer>

        <InputContainer>
          <Label>사진첨부</Label>
          <ImageUploadContainer>
            <ImageUploadInput>+</ImageUploadInput>
            <ImageUploadInput>+</ImageUploadInput>
            <ImageUploadInput>+</ImageUploadInput>
          </ImageUploadContainer>
        </InputContainer>

        <InputContainer>
          <Label>메인설정</Label>
          <RadioInputContainer>
            <Label>유튜브</Label>
            <RadioInput type="radio" name="main" />
            <Label>사진</Label>
            <RadioInput type="radio" name="main" />
          </RadioInputContainer>
        </InputContainer>

        <RegisterBtn type="submit">등록하기</RegisterBtn>
      </BoardContainer>
    </>
  );
}
