import styled from "@emotion/styled";

export const Layout = styled.div`
  min-width: 950px;
  max-width: 1000px;
  height: 100%;
  padding: 40px;

  border: 1px solid black;
`;

// -베스트 게시글---------------------------------------------------------------

export const BestBannerLayOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BestBannerTitle = styled.h2``;

export const BestBannerGroup = styled.span`
  display: flex;
  width: 220px;
  height: 200px;
  border: 1px solid black;
  border-radius: 20px;
  justify-content: start;
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

export const BestBannerInfoGroup = styled.div`
  padding: 12px;
  boxsizing: border-box;
`;

export const BestBannerSubTitle = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const BestBannerUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const BestBannerName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const BestBannerDate = styled.div`
  color: #828282;
  font-size: 12px;
  margin-top: 4px;
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
  margin-top: 8px;
  font-size: 14px;
`;

export const Test = styled.div``;

// -입력창---------------------------------------------------------------

export const SearchInputGroup = styled.div`
  margin-top: 20px;
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

export const BoardTableButton = styled.button`
  position: absolute;
  bottom: -20px;
  right: 10px;
  background-color: white;
  border: 2px solid #f2f2f2;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;
export const BoardTableButtonText = styled.span`
  margin-left: 8px;
`;
