import { database } from "@/config/firebase.config";
import { StoreType } from "@/types/store";
import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const STORECOLLECTION = collection(database, "store");

// 맛집 블로그

export const getStoreList = async (): Promise<
  QuerySnapshot<DocumentData, DocumentData>
> => {
  const result = await getDocs(STORECOLLECTION);
  return result;
};

export const getStore = (): void => {};

export const createStore = async (data: StoreType): Promise<string> => {
  const result = await addDoc(STORECOLLECTION, data);

  return result.id;
};

export const updateStore = (): void => {
  //   updateDoc();
};
