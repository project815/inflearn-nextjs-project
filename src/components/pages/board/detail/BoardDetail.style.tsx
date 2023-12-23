import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1000px;
  max-width: 1000px;
  height: 100%;
  box-sizing: border-box;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 30px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 55px;
`;
export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px;
  width: 100%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InfoText = styled.div`
  margin: 0px 10px;
`;
export const SubInfo = styled.div``;

export const Writer = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 800;
`;
export const CreateAt = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
export const Body = styled.div`
  height: 80%;
  padding: 10px;
  position: relative;
`;
export const BoardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
`;
export const ContnetImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 20px 0px;
`;
export const BoardContents = styled.div`
  font-size: 16px;
  font-weight: 400;
  min-height: 500px;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  word-wrap: break-word;
`;
export const BoardVideo = styled.div``;
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonWarpper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Button = styled.button`
  width: 180px;
  height: 50px;
  background-color: white;
  border: 1px solid #bdbdbd;
  margin: 10px;

  background-color: #bdbdbd;
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
