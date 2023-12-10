import Image from "next/image";
import * as S from "./BoardList.style";
import { ImageBoard1 } from "@/assets/images";
import {
  IconBtnBoardNew,
  IconDefaultUser,
  IconSearch,
  IconThumb,
} from "@/assets/icon/indext";
import React, { Dispatch, SetStateAction, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
import { BoardList } from "./BoardList.container";

type BestBannerType = {
  id: string;
  image: string;
  title: string;
  name: string;
  date: string;
  like: number;
};
type BoardType = {
  number: string;
  writer: string;
  title: string;
  date: string;
};

const BANNERLIST: BestBannerType[] = [
  {
    id: "1",
    image: "../../../assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "2",
    image: "../../../assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "3",
    image: "../../../assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
  {
    id: "4",
    image: "../../../assets/images/img_board1.png",
    title: "게시물 제목입니다.",
    name: "노원두",
    date: "2021.02.18",
    like: 356,
  },
];
export type ValuePiece = Date | null;

export type Value = [ValuePiece, ValuePiece];

type PropsType = {
  startDate: string;
  endDate: string;
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChnageSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickPage: (page: number) => void;
  boardList: Array<BoardList>;
  currentPage: number;
  totalPages: number;
  page: number[];
};

export default function BoardListUI(props: PropsType) {
  const {
    startDate,
    endDate,
    onChangeEndDate,
    onChangeStartDate,
    onChnageSearch,
    onClickPage,
    boardList,
    currentPage,
    totalPages,
    page,
  } = props;
  return (
    <S.Layout>
      <S.BestBannerLayOut>
        <S.BestBannerTitle>베스트 게시글</S.BestBannerTitle>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {BANNERLIST.map((i) => (
            <S.BestBannerGroup key={i.id}>
              <Image src={ImageBoard1} alt="" width={220} />
              <S.BestBannerInfoGroup>
                <S.BestBannerSubTitle>{i.title}</S.BestBannerSubTitle>
                <S.BestBannerUserInfo>
                  <Image src={IconDefaultUser} alt="" />
                  <S.BestBannerName>{i.name}</S.BestBannerName>
                </S.BestBannerUserInfo>
                <S.BestBannerDate>Data : {i.date}</S.BestBannerDate>
              </S.BestBannerInfoGroup>
              <S.BestBannerLikeGroup style={{}}>
                <Image src={IconThumb} alt="" />
                <S.BestBannerLikeCount>{i.like}</S.BestBannerLikeCount>
              </S.BestBannerLikeGroup>
            </S.BestBannerGroup>
          ))}
        </div>
      </S.BestBannerLayOut>

      <S.SearchInputGroup>
        <Image
          src={IconSearch}
          alt=""
          style={{ position: "absolute", left: "8px", top: "12px" }}
        />
        <S.SearchBoardInput placeholder="제목을 검색해주세요." />

        <div>
          <input
            type="date"
            style={{ height: "46px" }}
            defaultValue={startDate}
            onChange={onChangeStartDate}
          />
          <input
            type="date"
            style={{ height: "46px" }}
            defaultValue={endDate}
            onChange={onChangeEndDate}
          />
        </div>
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchInputGroup>

      <S.BoardTableGroup>
        <table
          style={{
            width: "100%",
            padding: "20px",
            textAlign: "center",
            borderCollapse: "collapse",
            borderBottom: "1.5px solid black",
            borderTop: "1.5px solid black",
          }}
        >
          <S.BoardTableHead>
            <tr>
              <th>번호</th>
              <th style={{ width: "60%" }}>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </S.BoardTableHead>
          {boardList &&
            boardList.map((i) => (
              <S.BoardTableBody key={i._id}>
                <tr>
                  <td>{i._id}</td>
                  <td>{i.title}</td>
                  <td>{i.writer}</td>
                  <td>{i.createdAt}</td>
                </tr>
              </S.BoardTableBody>
            ))}
        </table>
        <S.BoardTablePagination>
          <button
            onClick={() => onClickPage(currentPage - 5)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {page.map((page) => (
            <span
              key={page}
              onClick={() => onClickPage(page)}
              className={currentPage === page ? "active" : ""}
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontWeight: currentPage === page ? "bold" : "normal",
              }}
            >
              {page}
            </span>
          ))}

          <button
            onClick={() => onClickPage(currentPage + 5)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </S.BoardTablePagination>
        <S.BoardTableButton>
          <Image src={IconBtnBoardNew} alt="" />
          <S.BoardTableButtonText>게시물 등록하기</S.BoardTableButtonText>
        </S.BoardTableButton>
      </S.BoardTableGroup>
    </S.Layout>
  );
}
