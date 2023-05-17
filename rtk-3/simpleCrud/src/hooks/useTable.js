import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { indigo } from "@mui/material/colors";
export function useTable({ refetch, storeName }) {
  const dispatch = useDispatch();
  const {
    data,
    formData,
    loading,
    error,
    pagination,
    filters,
    progress,
    paginationComponentOptions,

  } = useSelector((state) => state[storeName]);

  const handleSort = (column, sortDirection) => {
    const sortByAction = {
      type: `${storeName}/setSortBy`,
      payload: column.sortField,
    };
    dispatch(sortByAction);

    const descendingAction = {
      type: `${storeName}/setDescending`,
      payload: sortDirection === "desc",
    };
    dispatch(descendingAction);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    const rowsPerPageAction = {
      type: `${storeName}/setRowsPerPage`,
      payload: newPerPage,
    };
    dispatch(rowsPerPageAction);

    const pageAction = { type: `${storeName}/setPage`, payload: page };
    dispatch(pageAction);
  };

  useEffect(() => {
    refetch();
  }, [pagination, filters, refetch]);

  const handlePageChange = (page) => {
    const pageAction = { type: `${storeName}/setPage`, payload: page };
    dispatch(pageAction);
  };

  const handleRowSelected = ({ selectedRows }) => {
    console.log("---------data logging--------", selectedRows);
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: indigo[500],
        color: "#fff",
      },
    },
  };
  const handleFilters = ({ target }) => {
    const { name, value } = target;
    const filterAction = {
      type: `${storeName}/setFilters`,
      payload: { name, value },
    };
    dispatch(filterAction);
  };

  return {
    handleSort,
    handlePerRowsChange,
    handlePageChange,
    handleRowSelected,
    customStyles,
    handleFilters,
    data,
    formData,
    loading,
    error,
    pagination,
    filters,
    progress,
    paginationComponentOptions,
  };
}
