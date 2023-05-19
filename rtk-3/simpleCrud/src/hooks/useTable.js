import { useEffect } from "react";
import useStore from "./useStore.js";

export function useTable({ refetch, storeName }) {
  const { pagination, filters } = useStore(storeName);

  //   useEffect(() => {
  //     refetch();
  //   }, [pagination, filters, refetch]);
  return {};
}
