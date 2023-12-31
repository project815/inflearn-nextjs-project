import BoardWrite from "@/components/Board/BoardCreateAndUpdate/BoardCreateAndUpdate.container";

export default function BoardNewPage(): JSX.Element {
  return <BoardWrite isEdit={false} />;
}
