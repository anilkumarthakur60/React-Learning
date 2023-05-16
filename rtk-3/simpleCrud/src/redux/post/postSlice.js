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

    setCommonProgress
} from "../common/commonSliceHook.js";


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
        setProgress: setCommonProgress

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
        setProgress
} = postSlice.actions;
