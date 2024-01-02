import { getStoreList } from "@/_api/firebase/store";
import { StoreType } from "@/types/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreListUI from "./StoreList.presenter";

export default function StoreList(): JSX.Element {
  const [storeList, setStoreList] = useState<StoreType[]>([]);
  const router = useRouter();
  const onClickStoreItem = (): void => {
    router.push("/store/create");
  };

  const getStoreListData = async (): Promise<void> => {
    getStoreList()
      .then((storeData) => {
        console.log("??");
        const result = storeData.docs.map((doc) => {
          return doc.data() as StoreType;
        });
        setStoreList((prev) => [...prev, ...result]);
        // storeData.docs.map((doc) => {
        //   setStoreList((prev) => prev, doc.data());
        // });
        // console.log("storeData : ", storeData);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  };

  useEffect(() => {
    getStoreListData();
  }, []);

  return (
    <>
      <StoreListUI storeList={storeList} onClickStoreItem={onClickStoreItem} />;
    </>
  );
}
