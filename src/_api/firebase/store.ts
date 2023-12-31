import { database } from "@/config/firebase.config";
import { addDoc, collection } from "firebase/firestore";

const STORECOLLECTION = collection(database, "store");

// 맛집 블로그

export const getStoreList = (): void => {};

export const getStore = (): void => {};

export const createStore = (): void => {
  addDoc(STORECOLLECTION, { writer: " " });
};

export const updateStore = (): void => {
  //   updateDoc();
};
