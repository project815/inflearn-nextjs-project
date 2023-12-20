import { gql } from "@apollo/client";

export const FETCHBOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
    }
  }
`;
