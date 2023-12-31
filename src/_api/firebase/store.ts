import { database } from "@/config/firebase.config";
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

export const createStore = (): void => {
  addDoc(STORECOLLECTION, { writer: " " });
};

export const updateStore = (): void => {
  //   updateDoc();
};
