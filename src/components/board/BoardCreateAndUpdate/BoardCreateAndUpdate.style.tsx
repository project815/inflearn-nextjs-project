import styled from "@emotion/styled";

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 30px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  width: 70%;
  margin-top: 30px;
`;

export const ContentTitle = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 50px;
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
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  padding: 10px;
  margin-top: 10px;

  ::placeholder {
    color: var(--Gray-4, #bdbdbd);
    font-size: 13px;
    font-weight: 300;
  }
`;

// export const PasswordInput = styled.input`
//   display: flex;
//   width: 100%;
// `;

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
  margin-right: 10px;
  position: relative;
`;

// export const ContentTextInput = styled.`
//   height: 100%;
//   min-height: 200px;
//   border: 1px solid var(--Gray-4, #bdbdbd);
//   background: var(--White, #fff);
//   text-align: start;
//   resize: none;

//   padding: 10px;
//   margin-top: 10px;

//   ::placeholder {
//     color: var(--Gray-4, #bdbdbd);
//     font-size: 13px;
//     font-weight: 300;
//   }
// `;

export const ZipcodeInput = styled.input`
  display: flex;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  max-width: 100px;
  min-width: 50px;

  padding: 10px;
  margin-top: 10px;

  color: #bdbdbd;
  font-size: 13px;
  font-weight: 300;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-top: 10px;
`;

export const AddressInput = styled.input`
  display: flex;
  width: 100%;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  margin-top: 25px;

  padding: 10px;
  margin-top: 10px;

  ::placeholder {
    color: var(--Gray-4, #bdbdbd);
    font-size: 13px;
    font-weight: 300;
  }
  /*   
  color: #bdbdbd;
  font-size: 13px;
  font-weight: 300; */
`;

export const ToggleInput = styled.input`
  margin-right: 2px;
  color: var(--Gray-4, #ffd600);

  &:checked {
    color: var(--Black, #000);
    background-color: var(--White, #fff);
  }
`;

export const SubmitButton = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 20%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#ffd600" : "#bdbdbd")};
  margin-top: 35px;

  width: 180px;
  height: 50px;
  border: 1px solid #bdbdbd;
  margin: 10px;

  border: 2px solid #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffd600;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
`;
