import * as S from "./BoardRegister.styles";

export default function BoardRegisterUI(props: any) {
  const { handleSubmit, register, errors, onSubmit } = props;
  return (
    <>
      <S.BoardContainer onSubmit={handleSubmit(onSubmit)}>
        <S.Title>게시물 등록</S.Title>
        <S.UserInputContainer>
          <S.InputContainer>
            <S.Label>작성자</S.Label>
            <S.WriterInput
              type="email"
              {...register("writer", { required: "Email is required" })}
            />
            <S.RequiredError>{errors.writer?.message}</S.RequiredError>
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>비밀번호</S.Label>
            <S.PasswordInput
              type="password"
              {...register("password", { required: "Password is required" })}
            />
            <S.RequiredError>{errors.password?.message}</S.RequiredError>
          </S.InputContainer>
        </S.UserInputContainer>

        <S.InputContainer>
          <S.Label>제목</S.Label>
          <S.ContentTitleInput
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          <S.RequiredError>{errors.title?.message}</S.RequiredError>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>내용</S.Label>
          <S.ContentInput
            type="type"
            {...register("contents", { required: "Contents is required" })}
          />
          <S.RequiredError>{errors.contents?.message}</S.RequiredError>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>주소</S.Label>
          <S.ZipCodeSearchContainer>
            <S.ZipCodeInput></S.ZipCodeInput>
            <S.ZipCodeSearchBtn>우편번호 검색</S.ZipCodeSearchBtn>
          </S.ZipCodeSearchContainer>
          <S.AddressInput></S.AddressInput>
          <S.AddressDetailInput></S.AddressDetailInput>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>유튜브</S.Label>
          <S.YoutubeInput></S.YoutubeInput>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>사진첨부</S.Label>
          <S.ImageUploadContainer>
            <S.ImageUploadInput>+</S.ImageUploadInput>
            <S.ImageUploadInput>+</S.ImageUploadInput>
            <S.ImageUploadInput>+</S.ImageUploadInput>
          </S.ImageUploadContainer>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>메인설정</S.Label>
          <S.RadioInputContainer>
            <S.Label>유튜브</S.Label>
            <S.RadioInput type="radio" name="main" />
            <S.Label>사진</S.Label>
            <S.RadioInput type="radio" name="main" />
          </S.RadioInputContainer>
        </S.InputContainer>

        <S.RegisterBtn type="submit">등록하기</S.RegisterBtn>
      </S.BoardContainer>
    </>
  );
}
