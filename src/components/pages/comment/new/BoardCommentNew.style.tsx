import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 950px;
  max-width: 1000px;
  height: 100%;
  box-sizing: border-box;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 30px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 100%;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
export const WriterInput = styled.input``;
export const PasswordInput = styled.input``;

export const CommentTextBox = styled.textarea`
  resize: none;

  height: 120px;
`;
export const CommentBody = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;
