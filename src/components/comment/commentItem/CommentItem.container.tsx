import {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "@/types/graphql/types";
import { useMutation } from "@apollo/client";
import CommentItemUI from "./CommentItem.presenter";
import { DELETEBOARDCOMMENT } from "./CommentItem.query";

export interface IBoardCommentListUIPropsType {
  comment: IBoardComment;
}

export default function CommentItem(
  props: IBoardCommentListUIPropsType
): JSX.Element {
  const { comment } = props;

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETEBOARDCOMMENT);

  //   const onClickDeleteModal = (): void => {
  //     confirm({
  //       icon: <CheckCircleOutlined style={{ color: "green" }} />,
  //       content: (
  //         <div>
  //           <div>비밀번호를 입력해주세요</div>
  //           <input
  //             style={{
  //               display: "flex",
  //               border: "1px solid var(--Gray-4, #bdbdbd)",
  //               background: "var(--White, #fff)",
  //               padding: "10px",
  //               marginTop: "10px",
  //               marginRight: "10px",
  //             }}
  //             onChange={(e) => {
  //               setPassword(e.target.value);
  //             }}
  //           />
  //         </div>
  //       ),

  //       onOk() {
  //         deleteComment(password);
  //       },
  //       onCancel() {},
  //     });
  //   };

  const onClickDeleteBoardComment = async (): Promise<void> => {
    const password = prompt("비밀번호를 입력해주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: comment._id,
        },
        refetchQueries: ["fetchBoardComments"],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <>
      <CommentItemUI
        comment={comment}
        onClickDeleteBoardComment={onClickDeleteBoardComment}
      />
    </>
  );
}
