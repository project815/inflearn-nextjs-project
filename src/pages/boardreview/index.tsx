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
} from "../../../src/styles/boardreview";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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
  const [createBoard] = useMutation(CREATEBOARD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      writer: "",
      password: "",
      contentTitle: "",
      contentText: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log("data : ", data);
    const { writer, password, contentTitle, contentText } = data;
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: contentTitle,
          contents: contentText,
          // youtubeUrl: "",
          // boardAddress: {
          //   zipcode: "",
          //   address: "",
          //   addressDetail: "",
          // },
          // images: "",
        },
      },
    });

    console.log("result : ", result);
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
              required: "Writer is requried",
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
              required: "Password is required",
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
          {...register("contentTitle", {
            required: "contentTitle is required",
          })}
          //   onChange={onChangeContentTitle}
        ></ContentInput>
      </InputGroup>
      <InputGroup>
        <Label>내용</Label>
        <ContentTextInput
          placeholder="내용을 입력해주세요."
          {...register("contentText", {
            required: "contentText is required",
          })}
          //   onChange={onChangeContentText}
        ></ContentTextInput>
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
