import * as S from "./BoardCreateAndUpdate.style";
import { IBoardNewUIPropsType } from "./BoardCreateAndUpdate.type";

export default function BoardCreateAndUpdateUI(
  props: IBoardNewUIPropsType
): JSX.Element {
  const {
    isEdit,

    onChangeBoardAddress,
    onClickAddressModal,
    onSubmitBoard,
    writerError,
    passwordError,
    titleError,
    contentsError,
    isActive,
    defaultValue,
    boardAddress,
    onChangeBoardInput,
    onClickFile,
  } = props;

  return (
    <S.ContentLayout>
      <S.ContentTitle>게시물 {isEdit ? "수정" : "등록"}</S.ContentTitle>
      <S.RowBetweenGroup>
        <S.WriterInputGroup>
          <S.Label>작성자</S.Label>
          <S.ContentInput
            type="text"
            placeholder="이름을 입력해주세요."
            defaultValue={defaultValue?.writer ?? ""}
            // 등록하기에는 없는 수정하기에는 있음.
            // ?? "" : 타입스크립트 상 null을 넣을 수 없음
            // null이나 undefined면 빈문자열을 넣겠다는 의미, 타입스크립트 상의 요구사항.
            disabled={isEdit}
            onChange={onChangeBoardInput}
            id="writer"
          />

          <S.ErrorMessage>{writerError}</S.ErrorMessage>
        </S.WriterInputGroup>
        <S.PasswordInputGroup>
          <S.Label>비밀번호</S.Label>
          <S.ContentInput
            type="password"
            placeholder="비밀번호을 입력해주세요."
            onChange={onChangeBoardInput}
            id="password"
          ></S.ContentInput>
          <S.ErrorMessage>{passwordError}</S.ErrorMessage>
        </S.PasswordInputGroup>
      </S.RowBetweenGroup>
      <S.InputGroup>
        <S.Label>제목</S.Label>
        <S.ContentInput
          placeholder="제목을 입력해주세요."
          defaultValue={defaultValue?.title}
          onChange={onChangeBoardInput}
          id="title"
        ></S.ContentInput>
        <S.ErrorMessage>{titleError}</S.ErrorMessage>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>내용</S.Label>
        <S.ContentTextInput
          placeholder="내용을 입력해주세요."
          defaultValue={defaultValue?.contents}
          onChange={onChangeBoardInput}
          id="contents"
        ></S.ContentTextInput>
        <S.ErrorMessage>{contentsError}</S.ErrorMessage>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>주소</S.Label>
        <S.RowGroup>
          <S.ZipcodeInput
            placeholder="07250"
            disabled
            value={String(
              defaultValue?.boardAddress?.zipcode ?? boardAddress?.zipcode ?? ""
            )}
          />
          <S.ZipcodeButton onClick={onClickAddressModal}>
            우편번호 검색
          </S.ZipcodeButton>
        </S.RowGroup>
        <S.AddressInput
          disabled
          value={String(
            defaultValue?.boardAddress?.address ?? boardAddress?.address ?? ""
          )}
        />
        <S.AddressInput
          onChange={onChangeBoardAddress}
          defaultValue={defaultValue?.boardAddress?.addressDetail ?? ""}
          // value={String(boardAddress?.addressDetail ?? "")}
          disabled={false}
        />
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>유튜브</S.Label>
        <S.ContentInput
          id="youtubeUrl"
          onChange={onChangeBoardInput}
          placeholder="제목을 입력해주세요."
        ></S.ContentInput>
      </S.InputGroup>
      <S.InputGroup>
        <S.Label>사진첨부</S.Label>
        <S.RowGroup>
          <S.ImageUploadBox onClick={onClickFile}>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadBox>
          {/* <S.ImageUploadBox onClick={onClickFile}>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadBox>
          <S.ImageUploadBox onClick={onClickFile}>
            <div>+</div>
            <div>upload</div>
          </S.ImageUploadBox> */}
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
      <S.SubmitButton type="submit" isActive={isActive} onClick={onSubmitBoard}>
        {isEdit ? "수정" : "등록"}하기
      </S.SubmitButton>
    </S.ContentLayout>
  );
}
