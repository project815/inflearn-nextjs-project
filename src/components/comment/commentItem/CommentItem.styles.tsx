import styled from "@emotion/styled";
import { Button, Rate } from "antd";
import Image from "next/image";
export const Comment = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
`;
export const CommentGroup = styled.div`
  margin-left: 10px;
  width: 85%;
  height: 100%;
`;

export const CommentUserInfoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AvatorImage = styled(Image)`
  width: 40px;
  height: 40px;
`;
export const CommenterWriper = styled.span`
  margin-right: 10px;
  font-size: 16px;
`;
export const CommentRate = styled(Rate)`
  position: relative;
  top: 2px;
`;
export const CommentUserInfoAndRateGroup = styled.div`
  display: flex;
  align-items: center;
  top: -2px;
  position: relative;
`;

export const CommentContent = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  word-wrap: break-word;
  color: #4f4f4f;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
`;

export const CommentModifyInput = styled.textarea`
  display: flex;
  width: 100%;
  border: 1px solid var(--Gray-4, #bdbdbd);
  background: var(--White, #fff);
  padding: 10px;
  margin-top: 10px;
  height: 100px;
  resize: none;

  ::placeholder {
    color: var(--Gray-4, #bdbdbd);
    font-size: 13px;
    font-weight: 300;
  }
`;

export const CommentDate = styled.div`
  margin-bottom: 10px;
  color: #bdbdbd;
  font-size: 12px;
`;

export const CommentModifyButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const CommentModifyButton = styled(Button)`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
