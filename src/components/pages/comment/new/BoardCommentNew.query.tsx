import { gql } from "@apollo/client";

export const CREATEBOARDCOMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      user {
        _id
        email
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
