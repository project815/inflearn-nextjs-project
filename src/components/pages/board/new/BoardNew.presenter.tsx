import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import * as S from "./BoardNew.style";

type ContentType = {
  writer: string;
  password: string;
  title: string;
  contents: string;
};
type PropsType = {
  isEdit: boolean;
  defaultValue: any;

  handleSubmit: UseFormHandleSubmit<ContentType>;
  onSubmit: (data: any) => Promise<void>;
  register: UseFormRegister<ContentType>;
  errors: FieldErrors<ContentType>;
  isActive: boolean;
};

export default function BoardNewUI(props: PropsType) {
  const {
    isEdit,
    handleSubmit,
    onSubmit,
    register,
    errors,
    isActive,
    defaultValue,
  } = props;

  return (
    <S.ContentLayout
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <S.ContentTitle>게시물 {isEdit ? "수정" : "등록"}</S.ContentTitle>
      <S.RowBetweenGroup>
        <S.WriterInputGroup>
          <S.Label>작성자</S.Label>
          <S.ContentInput
            type="text"
            {...register("writer", {
              ...(isEdit ? {} : { required: "작성자를 입력해주세요." }),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: "이메일 형식이 아닙니다.",
              },
            })}
            placeholder="이름을 입력해주세요."
            defaultValue={defaultValue?.writer}
            disabled={isEdit}
          />

          <S.ErrorMessage>{errors.writer?.message}</S.ErrorMessage>
        </S.WriterInputGroup>
        <S.PasswordInputGroup>
          <S.Label>비밀번호</S.Label>
          <S.ContentInput
            type="password"
            {...register("password", {
              required: "비밀번호을 입력해주세요.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            placeholder="비밀번호을 입력해주세요."
            defaultValue={defaultValue?.password}
          ></S.ContentInput>
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.PasswordInputGroup>
      </S.RowBetweenGroup>
      <S.InputGroup>
        <S.Label>제목</S.Label>
        <S.ContentInput
          placeholder="제목을 입력해주세요."
          defaultValue={defaultValue?.title}
          {...register("title", {
            ...(isEdit ? {} : { required: "제목을 입력해주세요." }),
          })}
          //   onChange={onChangeContentTitle}
        ></S.ContentInput>
        <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>내용</S.Label>
        <S.ContentTextInput
          placeholder="내용을 입력해주세요."
          defaultValue={defaultValue?.contents}
          {...register("contents", {
            ...(isEdit ? {} : { required: "내용을 입력해주세요." }),
          })}
          //   onChange={onChangeContentText}
        ></S.ContentTextInput>
        <S.ErrorMessage>{errors.contents?.message}</S.ErrorMessage>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>주소</S.Label>
        <S.RowGroup>
          <S.ZipcodeInput />
          <S.ZipcodeButton>우편번호 검색</S.ZipcodeButton>
        </S.RowGroup>
        <S.AddressInput />
        <S.AddressInput />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>유튜브</S.Label>
        <S.ContentInput placeholder="제목을 입력해주세요."></S.ContentInput>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>사진첨부</S.Label>
        <S.RowGroup>
          <S.ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadButton>
          <S.ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadButton>
          <S.ImageUploadButton>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadButton>
        </S.RowGroup>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>매인 설정</S.Label>
        <S.RowGroup>
          <S.RowGroup>
            <S.ToggleInput type="radio" name="uploaddtype" />
            <S.Label>유튜브</S.Label>
          </S.RowGroup>
          <S.RowGroup>
            <S.ToggleInput type="radio" name="uploaddtype" />
            <S.Label>사진</S.Label>
          </S.RowGroup>
        </S.RowGroup>
      </S.InputGroup>
      <S.SubmitButton type="submit" isActive={isActive}>
        {isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </S.ContentLayout>
  );
}
