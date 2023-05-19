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
} from "../common/commonSliceHook.js";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    ...initialCommonState,
  },
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
    allReset:allReset
  },
});

const postReducer = postSlice.reducer;

export default postReducer;
export const {
  setPage,
  setRowsPerPage,
  setSortBy,
  setDescending,
  setFilters,
  setFormData,
  clearError,
  setProgress,
} = postSlice.actions;

export const selectFormData = (state) => state.posts.formData;
export const selectData = (state) => state.posts.data;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;
export const selectPagination = (state) => state.posts.pagination;
console.log("---------data logging- post slice-------", selectPagination);
export const selectFilters = (state) => state.posts.filters;
export const selectSortBy = (state) => state.posts.sortBy;
export const selectDescending = (state) => state.posts.descending;
export const selectPage = (state) => state.posts.page;
export const selectRowsPerPage = (state) => state.posts.rowsPerPage;
export const selectTotal = (state) => state.posts.total;
export const selectPostStore = (state) => state.posts;
export const selectProgress = (state) => state.posts.progress;
export const selectRowsPerPageOptions = (state) =>
  state.posts.rowsPerPageOptions;
