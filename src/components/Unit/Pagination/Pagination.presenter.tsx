import { useState } from "react";
import * as S from "./Pagination.style";
import { PagiantionUIPropsType } from "./Pagination.types";

export default function PaginationUI(
  props: PagiantionUIPropsType
): JSX.Element {
  const { currentPage, setCurrentPage, totalCount, refetch } = props;

  const [page, setPage] = useState<number>(1);

  const onClickMoveToPrev = (): void => {
    const prevPage = page - 10;
    setCurrentPage(prevPage);
    setPage(prevPage);
    refetch({ page: prevPage });
  };

  const onClickMoveToNext = (): void => {
    const nextPage = page + 10;
    setCurrentPage(nextPage);
    setPage(nextPage);
    refetch({ page: nextPage });
  };

  const onClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    setCurrentPage(Number(e.currentTarget.id));
    refetch({ page: Number(e.currentTarget.id) });
  };
  return (
    <>
      <S.BoardTablePagination>
        <S.PaginationButton onClick={onClickMoveToPrev} disabled={page <= 1}>
          Prev
        </S.PaginationButton>
        {new Array(10)
          .fill(1)
          .filter((_, index) => index + page <= totalCount)
          .map((_, index) => (
            <S.Page
              key={index}
              id={String(index + page)}
              isActive={currentPage === page + index}
              onClick={onClick}
            >
              {index + page}
            </S.Page>
          ))}

        <S.PaginationButton
          onClick={onClickMoveToNext}
          disabled={page + 10 > totalCount}
        >
          Next
        </S.PaginationButton>
      </S.BoardTablePagination>
    </>
  );
}
