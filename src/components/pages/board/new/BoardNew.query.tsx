import { gql } from "@apollo/client";

export const CREATEBOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardNewPage() {
  return <BoardNew />;
}
