import styled from "@emotion/styled";
import { Button } from "antd";

export const Layout = styled.div`
  padding: 40px;
  margin-bottom: 100px;
  width: 100%;
`;

export const BoardTitle = styled.div`
  /* margin-top: 5px; */
  font-size: 15px;
  font-weight: bold;
`;
// -입력창---------------------------------------------------------------

export const SearchInputGroup = styled.div`
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const SearchBoardInput = styled.input`
  height: 100%;
  width: 56%;
  font-size: 16px;
  padding-left: 37px;
  box-sizing: border-box;
  border-radius: 10px;
  background: var(--Gray-6, #f2f2f2);
  border: 0px;
`;
export const SearchDateInput = styled.input`
  height: 100%;
  width: 25%;
  font-size: 16px;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  width: 12%;
  height: 100%;
  background-color: black;
  color: white;
  font-size: 16px;
  border-radius: 10px;
`;

export const BoardTableGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardTableHead = styled.thead`
  height: 50px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoardTableBody = styled.tbody`
  font-size: 16px;
  color: #4f4f4f;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

export const BoardTableButton = styled(Button)`
  background-color: white;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
`;
export const BoardTableButtonText = styled.span`
  margin-left: 8px;
`;
