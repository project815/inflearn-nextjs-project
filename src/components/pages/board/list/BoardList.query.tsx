import { gql } from "@apollo/client";

export const FETCHBOARDS = gql`
  query {
    fetchBoards(
      startDate: "2023-01-01"
      endDate: "2023-01-31"
      search: ""
      page: 2
    ) {
      _id
      contents
      likeCount
      dislikeCount
    }
  }
`;
