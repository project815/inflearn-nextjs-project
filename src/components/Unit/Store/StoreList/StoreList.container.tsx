import { useRouter } from "next/router";
import StoreListUI from "./StoreList.presenter";

export default function StoreList(): JSX.Element {
  const router = useRouter();
  const onClickStoreItem = (): void => {
    router.push("/store/create");
  };

  return <StoreListUI onClickStoreItem={onClickStoreItem} />;
}
