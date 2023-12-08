import { gql } from "@apollo/client";

export const FETCHBOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      updatedAt
    }
  }
`;
