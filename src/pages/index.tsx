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
} from "../styles/home";

export default function Home() {
  return (
    <>
      <BoardContainer>
        <Title>게시물 등록</Title>
        <UserInputContainer>
          <InputContainer>
            <Label>작성자</Label>
            <WriterInput></WriterInput>
          </InputContainer>
          <InputContainer>
            <Label>비밀번호</Label>
            <PasswordInput></PasswordInput>
          </InputContainer>
        </UserInputContainer>

        <InputContainer>
          <Label>제목</Label>
          <ContentTitleInput></ContentTitleInput>
        </InputContainer>

        <InputContainer>
          <Label>내용</Label>
          <ContentInput></ContentInput>
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

        <RegisterBtn>등록하기</RegisterBtn>
      </BoardContainer>
    </>
  );
}
