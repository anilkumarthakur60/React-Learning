

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
} = userSlice.actions;
