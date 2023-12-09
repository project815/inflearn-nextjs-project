import { useQuery } from "@apollo/client";
import { FETCHBOARDS } from "./BoardList.query";
import BoardListUI from "./BoardList.presenter";
import { useState } from "react";

export default function BoardList() {
  const { data } = useQuery(FETCHBOARDS);

  return <BoardListUI />;
}
