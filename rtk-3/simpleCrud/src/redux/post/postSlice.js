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
  setCommonFormDataNull
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
    allReset: allReset,
    setData: setCommonData,
    setModalFalse: setCommonShowModalFalse,
    setModalTrue: setCommonShowModalTrue,
    setShowModal: setCommonShowModal,
    setEditFormData: setCommonEditFormData,
    setFormDataNull:setCommonFormDataNull,
    setFilterNull:setCommonFilterNull,


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
  setData,
  setModalFalse,
  setModalTrue,
  setShowModal,
  setEditFormData,
  setFormDataNull,
} = postSlice.actions;

export const selectPostFormData = (state) => state.posts.formData;
export const selectPostData = (state) => state.posts.data;
export const selectPostLoading = (state) => state.posts.loading;
export const selectPostError = (state) => state.posts.error;
export const selectPostPagination = (state) => state.posts.pagination;
export const selectPostFilters = (state) => state.posts.filters;
export const selectPostSortBy = (state) => state.posts.sortBy;
export const selectPostDescending = (state) => state.posts.descending;
export const selectPostPage = (state) => state.posts.page;
export const selectPostRowsPerPage = (state) => state.posts.rowsPerPage;
export const selectPostTotal = (state) => state.posts.total;
export const selectPostPostStore = (state) => state.posts;
export const selectPostProgress = (state) => state.posts.progress;
export const selectPostRowsPerPageOptions = (state) =>
  state.posts.rowsPerPageOptions;
