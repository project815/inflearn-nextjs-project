import { gql } from "@apollo/client";

export const CREATEBOARDCOMMENT = gql`
  mutation createboardcomment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
