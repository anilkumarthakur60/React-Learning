import { useDispatch, useSelector } from "react-redux";
import { indigo } from "@mui/material/colors";
import { debounce } from "lodash";

function useStore(storeName) {
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
    showModal,
  } = useSelector((state) => state[storeName]);

  const { page, rowsPerPage, sortBy, descending, total } = pagination;

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
  const handleFilters = debounce(({ target }) => {
    const { name, value } = target;
    const filterAction = {
      type: `${storeName}/setFilters`,
      payload: { name, value },
    };
    dispatch(filterAction);
  }, 500);

  const deleteFilterKeys = (keyName) => () => {
    const filterAction = {
      type: `${storeName}/deleteFilterKeys`,
      payload: { keyName },
    };
    dispatch(filterAction);
  };
  const clearFilterKeys = (keyName) => () => {
    const filterAction = {
      type: `${storeName}/setFilters`,
      payload: { name: keyName, value: null },
    };
    dispatch(filterAction);
  };

  const allReset = () => {
    const filterAction = {
      type: `${storeName}/allReset`,
      payload: {},
    };
    dispatch(filterAction);
  };

  const handleEditFormData = (data) => {
    console.log("handleEditFormData---------------", data);
    const formDataAction = {
      type: `${storeName}/setEditFormData`,
      payload: data,
    };
    dispatch(formDataAction);
  };

  const setFormData = ({ target }) => {
    const { name, value } = target;
    const formAction = {
      type: `${storeName}/setFormData`,
      payload: { name, value },
    };
    dispatch(formAction);
  };

  const setShowModal = (val) => {
    const filterAction = {
      type: `${storeName}/setShowModal`,
      payload: val,
    };
    dispatch(filterAction);
  };

  return {
    //state variables
    data,
    formData,
    loading,
    error,
    pagination,
    filters,
    progress,
    paginationComponentOptions,
    page,
    rowsPerPage,
    sortBy,
    descending,
    total,
    showModal,

    //functions
    handleSort,
    handlePerRowsChange,
    handlePageChange,
    handleRowSelected,
    customStyles,
    handleFilters,
    deleteFilterKeys,
    clearFilterKeys,
    allReset,
    handleEditFormData,
    setFormData,
    setShowModal,
  };
}

export default useStore;
export const storeName = {
  posts: "posts",
  users: "users",
  roles: "roles",
};
