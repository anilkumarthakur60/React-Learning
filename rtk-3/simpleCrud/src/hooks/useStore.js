import { useDispatch, useSelector } from "react-redux";
import { indigo } from "@mui/material/colors";
import { debounce } from "lodash";

function useStore(store_name) {
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
  } = useSelector((state) => state[store_name]);

  const { page, rowsPerPage, sortBy, descending, total } = pagination;

  const handleSort = (column, sortDirection) => {
    const sortByAction = {
      type: `${store_name}/setSortBy`,
      payload: column.sortField,
    };
    dispatch(sortByAction);

    const descendingAction = {
      type: `${store_name}/setDescending`,
      payload: sortDirection === "desc",
    };
    dispatch(descendingAction);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    const rowsPerPageAction = {
      type: `${store_name}/setRowsPerPage`,
      payload: newPerPage,
    };
    dispatch(rowsPerPageAction);

    const pageAction = { type: `${store_name}/setPage`, payload: page };
    dispatch(pageAction);
  };
  const handlePageChange = (page) => {
    const pageAction = { type: `${store_name}/setPage`, payload: page };
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
      type: `${store_name}/setFilters`,
      payload: { name, value },
    };
    dispatch(filterAction);
  }, 500);

  const deleteFilterKeys = (keyName) => () => {
    const filterAction = {
      type: `${store_name}/deleteFilterKeys`,
      payload: { keyName },
    };
    dispatch(filterAction);
  };
  const clearFilterKeys = (keyName) => () => {
    const filterAction = {
      type: `${store_name}/setFilters`,
      payload: { name: keyName, value: null },
    };
    dispatch(filterAction);
  };

  const allReset = () => {
    const filterAction = {
      type: `${store_name}/allReset`,
      payload: {},
    };
    dispatch(filterAction);
  };

  const handleEditFormData = (data) => {
    console.log("handleEditFormData---------------", data);
    const formDataAction = {
      type: `${store_name}/setEditFormData`,
      payload: data,
    };
    dispatch(formDataAction);
  };

  const setFormData = ({ target }) => {
    const { name, value } = target;
    const formAction = {
      type: `${store_name}/setFormData`,
      payload: { name, value },
    };
    dispatch(formAction);
  };

  const setShowModal = (val) => {
    const filterAction = {
      type: `${store_name}/setShowModal`,
      payload: val,
    };
    dispatch(filterAction);
  };

  const setFormDataNull = () => {
    const filterAction = {
      type: `${store_name}/setFormDataNull`,
      payload: {},
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
    setFormDataNull,
  };
}

export default useStore;
export const storeName = {
  users: "users",
  posts: "posts",
  roles: "roles",
};
