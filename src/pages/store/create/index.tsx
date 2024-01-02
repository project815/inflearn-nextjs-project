import { createStore } from "@/_api/firebase/store";
import { StoreType } from "@/types/store";
import { useState } from "react";

export default function StoreCreatePage(): JSX.Element {
  const [storedata, setStoreData] = useState<StoreType>({
    name: "",
    description: "",
  });
  const onChangeStoreData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(
      `e.target.id : ${e.target.id} , e.target.value : ${e.target.value}`
    );
    setStoreData({ ...storedata, [e.target.id]: e.target.value });
  };
  const onClickStoreCreate = (): void => {
    createStore(storedata);
  };
  return (
    <>
      <div>
        <div>식당 등록</div>
        <div>
          <span>식당 이름 : </span>
          <input type="text" id="name" onChange={onChangeStoreData} />
        </div>
        {/* <div>
          <span>음식 유형 : </span>
          <input type="text" />
        </div> */}
        <div>
          <span>내용 : </span>
          <input type="text" id="description" onChange={onChangeStoreData} />
        </div>
        {/* <div>
          <span>평점 : </span>
          <input type="text" id=""/>
        </div> */}
        {/* <div>
          <span>리뷰 : </span>
          <input type="text" />
        </div> */}
        <button onClick={onClickStoreCreate}>등록하기</button>
      </div>
    </>
  );
}
