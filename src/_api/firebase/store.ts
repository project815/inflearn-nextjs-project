import { database } from "@/config/firebase.config";
import { StoreType } from "@/types/store";
import { addDoc, collection, getDocs } from "firebase/firestore";

const STORECOLLECTION = collection(database, "store");

// 맛집 블로그

export const getStoreList = async (): Promise<any> => {
  const result = await getDocs(STORECOLLECTION);
  console.log("result : ", result);
  result.docs.map((doc) => {
    return doc.data();
  });
};

export const getStore = (): void => {};

export const createStore = async (data: StoreType): Promise<string> => {
  const result = await addDoc(STORECOLLECTION, data);

  return result.id;
};

export const updateStore = (): void => {
  //   updateDoc();
};
