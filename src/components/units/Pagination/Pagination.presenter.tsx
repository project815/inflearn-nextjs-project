// import * as S from "./Pagination.style";
// interface PagiantionUIPropsType {
//   currentPage: number;
//   totalPages?: number;
//   onClickPage: (page: number) => void;
// }
// export default function PaginationUI(
//   props: PagiantionUIPropsType
// ): JSX.Element {
//   const { currentPage, totalPages, onClickPage } = props;
//   return (
//     <>
//       <S.BoardTablePagination>
//         <S.PaginationButton
//           onClick={() => {
//             onClickPage(currentPage - 1);
//           }}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </S.PaginationButton>
//         {page.map((page) => (
//           <span
//             key={page}
//             onClick={() => {
//               onClickPage(page);
//             }}
//             className={currentPage === page ? "active" : ""}
//             style={{
//               marginLeft: "10px",
//               marginRight: "10px",
//               fontWeight: currentPage === page ? "800" : "normal",
//               fontSize: currentPage === page ? "14px" : "12px",
//               color: currentPage === page ? "#FFD600" : "black",
//             }}
//           >
//             {page}
//           </span>
//         ))}

//         <S.PaginationButton
//           onClick={() => {
//             onClickPage(currentPage + 1);
//           }}
//           disabled={
//             totalPages !== undefined ? currentPage >= totalPages : false
//           }
//         >
//           Next
//         </S.PaginationButton>
//       </S.BoardTablePagination>
//     </>
//   );
// }
