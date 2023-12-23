import styled from "@emotion/styled";
import { Button } from "antd";

export const Layout = styled.div`
  min-width: 950px;
  max-width: 1000px;
  height: 100%;
  padding: 40px;

  margin-bottom: 100px;
  /* border: 1px solid black; */
`;

// -베스트 게시글---------------------------------------------------------------

export const BestBannerLayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const BestBannerTitle = styled.h2``;

export const BestBannerGroup = styled.span`
  display: flex;
  width: 205px;
  height: 200px;
  border-radius: 20px;
  justify-content: start;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const BestBannerInfoGroup = styled.div`
  padding: 12px;
  box-sizing: border-box;
`;

export const BestBannerSubTitle = styled.div`
  /* margin-top: 5px; */
  font-size: 15px;
  font-weight: bold;
`;

export const BestBannerUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const BestBannerName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const BestBannerDate = styled.div`
  color: #828282;
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.6;
  left: 3px;
  position: relative;
`;

export const BestBannerLikeGroup = styled.div`
  position: absolute;
  right: 14px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BestBannerLikeCount = styled.div`
  /* margin-top: px; */
  font-size: 13px;
`;

export const Test = styled.div``;

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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

export const BoardTablePagination = styled.div`
  margin-top: 40px;
`;

export const PaginationButton = styled(Button)``;

export const BoardTableButton = styled(Button)`
  position: absolute;
  bottom: -20px;
  right: 10px;
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
