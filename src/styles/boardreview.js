import styled from "@emotion/styled";

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  border: 1px solid black;
  box-sizing: border-box;
  min-width: 600px;
  max-width: 1000px;
`;

export const ContentTitle = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
`;

export const WriterInputGroup = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 48%;
`;
export const PasswordInputGroup = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 48%;
`;

export const Label = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentInput = styled.input`
  display: flex;
  width: 100%;
  height: 24px;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
`;

export const PasswordInput = styled.input`
  display: flex;
  width: 100%;
`;

export const RowBetweenGroup = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  width: 100%;
`;
export const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentTextInput = styled.textarea`
  height: 100%;
  width: 100%;
  min-height: 200px;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  text-align: start;
  resize: none;
`;

export const ZipcodeInput = styled.input`
  display: flex;
  height: 24px;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  max-width: 100px;
  min-width: 50px;
`;
export const ZipcodeButton = styled.button`
  display: inline-flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  background: var(--Black, #000);
  color: var(--White, #fff);
  font-size: 10px;
  margin-left: 10px;
`;

export const ImageUploadButton = styled.button`
  width: 70px;
  height: 70px;
  displey: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const AddressInput = styled.input`
  display: flex;
  width: 100%;
  height: 24px;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  margin-top: 25px;
`;

export const ToggleInput = styled.input`
  color: var(--Gray-4, #ffd600);

  &:checked {
    color: var(--Black, #000);
    background-color: var(--White, #fff);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 20%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ffd600;
  margin-top: 35px;
`;
