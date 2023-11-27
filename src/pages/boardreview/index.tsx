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
} from "../../../src/styles/boardreview";

export default function BoardPage() {
  return (
    <ContentLayout>
      <ContentTitle>게시물 등록</ContentTitle>
      <RowBetweenGroup>
        <WriterInputGroup>
          <Label>작성자</Label>
          <ContentInput placeholder="이름을 입력해주세요."></ContentInput>
        </WriterInputGroup>
        <PasswordInputGroup>
          <Label>비밀번호</Label>
          <ContentInput placeholder="비밀번호을 입력해주세요."></ContentInput>
        </PasswordInputGroup>
      </RowBetweenGroup>
      <InputGroup>
        <Label>제목</Label>
        <ContentInput placeholder="제목을 입력해주세요."></ContentInput>
      </InputGroup>
      <InputGroup>
        <Label>내용</Label>
        <ContentTextInput placeholder="제목을 입력해주세요."></ContentTextInput>
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
      <SubmitButton>등록하기</SubmitButton>
    </ContentLayout>
  );
}
