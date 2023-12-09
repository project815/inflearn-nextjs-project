import { useQuery } from "@apollo/client";
import { FETCHBOARDS } from "./BoardList.query";
import BoardListUI from "./BoardList.presenter";
import { useState } from "react";

export default function BoardList() {
  const { data } = useQuery(FETCHBOARDS);
  const now = new Date();
  const [startDate, setStartDate] = useState<string>(
    new Date(now.setMonth(now.getMonth() - 1)).toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

  console.log("startDate :", startDate);
  console.log("endDate :", endDate);

  return (
    <BoardListUI
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
}
