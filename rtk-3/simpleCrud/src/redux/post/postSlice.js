import {createSlice} from "@reduxjs/toolkit";
import {
    clearErrorAction, commonInitialState,
    setDescendingAction,
    setFiltersAction, setFormDataAction,
    setPageAction,
    setRowsPerPageAction,
    setSortByAction
} from "../common/commonSlice.js";


const postSlice = createSlice({
    name: "posts",

    initialState:commonInitialState,
    reducers: {
        setPage: setPageAction,
        setRowsPerPage: setRowsPerPageAction,
        setSortBy: setSortByAction,
        setDescending: setDescendingAction,
        setFilters: setFiltersAction,
        setFormData: setFormDataAction,
        clearError: clearErrorAction,
    }


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
