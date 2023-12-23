import styled from "@emotion/styled";
import { Button, Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  box-sizing: border-box;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 100%;
  position: relative;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
export const WriterInput = styled.input`
  display: flex;
  width: 150px;
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
export const PasswordInput = styled.input`
  display: flex;
  width: 150px;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  padding: 10px;
  margin-top: 10px;
  margin-left: 15px;

  ::placeholder {
    color: var(--Gray-4, #bdbdbd);
    font-size: 13px;
    font-weight: 300;
  }
`;

export const CommentRate = styled(Rate)`
  position: relative;
  top: 5px;
  margin-left: 15px;
`;

export const CommentTextBox = styled.textarea`
  resize: none;

  height: 120px;

  display: flex;
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
export const CommentBody = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: end;
  margin-top: 0px;
`;

export const CommentModifyButton = styled(Button)`
  border-radius: 0%;
  right: 0px;
  width: 100px;

  position: absolute;
  background-color: black;
  color: white;
  height: 50px;
`;
