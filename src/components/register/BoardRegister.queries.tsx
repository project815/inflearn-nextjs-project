import { gql } from "@apollo/client";

export const CREATEBOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
    }
  }
`;
