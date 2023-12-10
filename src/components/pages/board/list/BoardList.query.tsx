import { gql } from "@apollo/client";

export const FETCHBOARDS = gql`
  query fetchBoards(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
    $page: Int
  ) {
    fetchBoards(
      startDate: $startDate
      endDate: $endDate
      search: $search
      page: $page
    ) {
      _id
      title
      writer
      createdAt
    }
  }
`;

export const FETCHBOARDSCOUNT = gql`
  query {
    fetchBoardsCount(startDate: "2023-01-01", endDate: "2023-12-08", search: "")
  }
`;
