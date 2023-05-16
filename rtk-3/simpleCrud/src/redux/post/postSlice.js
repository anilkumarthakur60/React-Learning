import {createSlice} from "@reduxjs/toolkit";
import {
    initialCommonState,
    setCommonPage,
    setCommonRowsPerPage,
    setCommonSortBy,
    setCommonDescending,
    setCommonFilters,
    setCommonFormData,
    clearCommonError,
} from "../common/common.js";


const postSlice = createSlice({
    name: "posts",
    initialState: initialCommonState,
    reducers: {
        setPage: setCommonPage,
        setRowsPerPage: setCommonRowsPerPage,
        setSortBy: setCommonSortBy,
        setDescending: setCommonDescending,
        setFilters: setCommonFilters,
        setFormData: setCommonFormData,
        clearError: clearCommonError,

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
} = postSlice.actions;
