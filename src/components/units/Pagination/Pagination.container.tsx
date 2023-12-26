import PaginationUI from "./Pagination.presenter";
import { PagiantionUIPropsType } from "./Pagination.types";

export default function Pagination(props: PagiantionUIPropsType): JSX.Element {
  const { currentPage, setCurrentPage, totalCount, refetch } = props;
  return (
    <PaginationUI
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalCount={totalCount}
      refetch={refetch}
    />
  );
}
