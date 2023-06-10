import {createSlice} from "@reduxjs/toolkit";
import {
    allReset,
    clearCommonError,
    deleteFilterKeys,
    initialCommonState,
    setCommonData,
    setCommonDescending,
    setCommonEditFormData,
    setCommonFilterNull,
    setCommonFilters,
    setCommonFormData,
    setCommonFormDataNull,
    setCommonPage,
    setCommonProgress,
    setCommonRowsPerPage,
    setCommonShowModal,
    setCommonShowModalFalse,
    setCommonShowModalTrue,
    setCommonSortBy,
} from "../common/commonSliceHook.js";

const userSlice = createSlice({
    name: "users",
    initialState: {
        ...initialCommonState,
        formData: {
            email: "admin@gmail.com",
            password: "password",
        },
      userDetail:{}
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
        setFormDataNull: setCommonFormDataNull,
        setFilterNull: setCommonFilterNull,
        setUserDetail: (state, action) => {
            state.userDetail = action.payload;
        }
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
    setUserDetail
} = userSlice.actions;

export const selectUserFormData = (state) => state.users.formData;
export const selectUserData = (state) => state.users.data;
export const selectUserLoading = (state) => state.users.loading;
export const selectUserError = (state) => state.users.error;
export const selectUserPagination = (state) => state.users.pagination;
export const selectUserFilters = (state) => state.users.filters;
export const selectUserSortBy = (state) => state.users.sortBy;
export const selectUserDescending = (state) => state.users.descending;
export const selectUserPage = (state) => state.users.page;
export const selectUserRowsPerPage = (state) => state.users.rowsPerPage;
export const selectUserTotal = (state) => state.users.total;
export const selectUserPostStore = (state) => state.posts;
export const selectUserProgress = (state) => state.users.progress;
export const selectUserRowsPerPageOptions = (state) =>
    state.users.rowsPerPageOptions;
