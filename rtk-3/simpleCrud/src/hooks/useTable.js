import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { indigo } from "@mui/material/colors";
import useStore from "./useStore.js";
export function useTable({ refetch, storeName }) {


  const {pagination,filters}=useStore(storeName);

  useEffect(() => {
    refetch();
  }, [pagination, filters, refetch]);
  return {

  };
}
