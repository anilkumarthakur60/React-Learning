import {createSlice} from "@reduxjs/toolkit";
import {
    commonInitialState,
    setPageAction,
    setRowsPerPageAction,
    setSortByAction, setDescendingAction, setFiltersAction, setFormDataAction, clearErrorAction
} from "../common/commonSlice.js";


const userSlice = createSlice({
    name: "users",
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
