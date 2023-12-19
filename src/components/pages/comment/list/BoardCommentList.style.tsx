import styled from "@emotion/styled";
// commentList
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
export const CommentUserInfoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CommenterWriper = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

export const CommentContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  width: 95%;
  position: relative;
  left: 30px;
`;

export const CommentDate = styled.div`
  margin-bottom: 10px;
  color: #bdbdbd;
`;
export const Comment = styled.div`
  border-bottom: 1px solid #bdbdbd;
  margin-top: 10px;
  margin-bottom: 10px;
`;
