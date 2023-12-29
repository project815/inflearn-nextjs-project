import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 50px;
`;

export const CommentTitleGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 7px;
`;

export const RowGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentInput = styled.input`
  display: flex;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;

  ::placeholder {
    color: var(--Gray-4, #bdbdbd);
    font-size: 13px;
    font-weight: 300;
  }
`;

export const CommentRate = styled(Rate)`
  margin-top: 10px;
`;
export const CommentTextarea = styled.textarea`
  display: flex;
  width: 100%;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  padding: 10px;
  margin-top: 10px;
  height: 100px;
  resize: none;
`;
export const SubmitButton = styled.button`
  display: flex;
  width: 88px;
  height: 42px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  color: white;
  background: var(--Black, #000);
`;

export const Border = styled.div`
  border: 1px solid var(--Gray-4, #bdbdbd);
  border-top: none;
  display: flex;
  justify-content: end;
`;
