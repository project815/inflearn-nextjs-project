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
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
};

export default function BoardListUI(props: PropsType) {
  const { setStartDate, startDate, endDate, setEndDate } = props;
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
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            style={{ height: "46px" }}
            defaultValue={endDate}
            onChange={(e) => setEndDate(e.target.value)}
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
          <S.BoardTableBody>
            <tr>
              <td>10</td>
              <td>게시물 제목입니다.</td>
              <td>노원두.</td>
              <td>2020.09.28.</td>
            </tr>
          </S.BoardTableBody>
          <S.BoardTableBody>
            <tr>
              <td>10</td>
              <td>게시물 제목입니다.</td>
              <td>노원두.</td>
              <td>2020.09.28.</td>
            </tr>
          </S.BoardTableBody>
        </table>
        <S.BoardTablePagination>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </S.BoardTablePagination>
        <S.BoardTableButton>
          <Image src={IconBtnBoardNew} alt="" />
          <S.BoardTableButtonText>게시물 등록하기</S.BoardTableButtonText>
        </S.BoardTableButton>
      </S.BoardTableGroup>
    </S.Layout>
  );
}
