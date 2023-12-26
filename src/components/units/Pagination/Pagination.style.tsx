import styled from "@emotion/styled";
import { Button } from "antd";

export const BoardTablePagination = styled.div`
  margin-top: 40px;
`;

export const PaginationButton = styled(Button)``;

export const Page = styled.span<{ isActive: boolean }>`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  font-weight: ${(props) => (props.isActive ? "800" : "normal")};
  font-size: ${(props) => (props.isActive ? "14px" : "12px")};
  color: ${(props) => (props.isActive ? "#FFD600" : "black")};
`;
