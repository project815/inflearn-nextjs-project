import styled from "@emotion/styled";

export const BoardContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 600px;
  height: 850px;
  padding: 30px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  display: flex;
  witdh: 100%;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  item-align: center;
  width: 100%;
`;
export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2px;
`;
export const WriterInput = styled.input`
  margin-right: 10px;
`;
export const PasswordInput = styled.input``;

export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const ContentTitleInput = styled.input``;
export const ContentInput = styled.input`
  height: 150px;
`;

export const ZipCodeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50p%;
`;
export const ZipCodeInput = styled.input`
  margin-bottom: 10px;
`;
export const ZipCodeSearchBtn = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const AddressInput = styled.input`
  margin-bottom: 10px;
`;
export const AddressDetailInput = styled.input`
  margin-bottom: 10px;
`;
export const YoutubeInput = styled.input``;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ImageUploadInput = styled.button`
  width: 30px;
  height: 30px;
  background-color: grey;
  margin-right: 10px;
`;
export const RadioInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`;
export const RadioInput = styled.input``;

export const RegisterBtn = styled.button`
  background-color: #ffd600;
  padding: 14px 60px;
  margin: 0px 180px;
`;

export const RequiredError = styled.p`
  font-size: 5px;
  color: red;
  min-height: 15px;
`;
