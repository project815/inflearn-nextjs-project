import BoardWrite from "@/components/board/BoardCreateAndUpdate/BoardCreateAndUpdate.container";

export default function BoardNewPage(): JSX.Element {
  return <BoardWrite isEdit={false} />;
}
