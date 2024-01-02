import styled from "@emotion/styled";

export const StoreLayOut = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const StoreTitle = styled.h2``;

export const StoreGroup = styled.span`
  /* 각 아이템의 스타일을 설정 */
  break-inside: avoid; /* 열 내에서 아이템이 나뉘는 것을 방지 */
  margin-bottom: 20px; /* 아이템 간의 간격 설정 */
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

export const StoreInfoGroup = styled.div`
  padding: 12px;
  box-sizing: border-box;
`;

export const StoreSubTitle = styled.div`
  /* margin-top: 5px; */
  font-size: 15px;
  font-weight: bold;
`;

export const StoreUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const StoreName = styled.span`
  font-size: 14px;
  margin-left: 5px;
`;

export const StoreDate = styled.div`
  color: #828282;
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.6;
  left: 3px;
  position: relative;
`;

export const StoreLikeGroup = styled.div`
  position: absolute;
  right: 14px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StoreLikeCount = styled.div`
  /* margin-top: px; */
  font-size: 13px;
`;

export const Test = styled.div``;
