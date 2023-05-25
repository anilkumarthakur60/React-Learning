import { createSlice } from "@reduxjs/toolkit";
import {
  initialCommonState,
  setCommonPage,
  setCommonRowsPerPage,
  setCommonSortBy,
  setCommonDescending,
  setCommonFilters,
  setCommonFormData,
  clearCommonError,
  setCommonProgress,
  deleteFilterKeys,
  allReset,
  setCommonData,
  setCommonShowModalFalse,
  setCommonShowModalTrue,
  setCommonShowModal,
  setCommonEditFormData,
  setCommonFilterNull,
  setCommonFormDataNull,
} from "../common/commonSliceHook.js";

const userSlice = createSlice({
  name: "users",
  initialState: initialCommonState,
  reducers: {
    setPage: setCommonPage,
    setRowsPerPage: setCommonRowsPerPage,
    setSortBy: setCommonSortBy,
    setDescending: setCommonDescending,
    setFilters: setCommonFilters,
    setFormData: setCommonFormData,
    clearError: clearCommonError,
    setProgress: setCommonProgress,
    deleteFilterKeys: deleteFilterKeys,
    allReset: allReset,
    setData: setCommonData,
    setModalFalse: setCommonShowModalFalse,
    setModalTrue: setCommonShowModalTrue,
    setShowModal: setCommonShowModal,
    setEditFormData: setCommonEditFormData,
    setFormDataNull: setCommonFormDataNull,
    setFilterNull: setCommonFilterNull,
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
export const {
  setPage,
  setRowsPerPage,
  setSortBy,
  setDescending,
  setFilters,
  setFormData,
  clearError,
  setProgress,
  setData,
  setModalFalse,
  setModalTrue,
  setShowModal,
  setEditFormData,
  setFormDataNull,
} = userSlice.actions;
