import {createSlice} from "@reduxjs/toolkit";
import {commonReducer,commonInitialState} from "../common/commonSlice.js";


const postsSlice = createSlice({
    name: "posts",
    initialState:commonInitialState,
    reducers: {
        setPage(state, action) {
            state.pagination.page = action.payload;
        },
        setRowsPerPage(state, action) {
            state.pagination.rowsPerPage = action.payload;
        },
        setSortBy(state, action) {
            state.pagination.sortBy = action.payload;
        },
        setDescending(state, action) {
            state.pagination.descending = action.payload;
        },
        setFilters(state, action) {
            state.filters = action.payload;
        },
        setFormData(state, action) {
            state.formData = action.payload;
        },
        clearError(state, action) {
            const { fieldName } = action.payload;
            delete state.error[fieldName];
        },
    }


});

const postsReducer = postsSlice.reducer;

export default postsReducer;
export const {
    setPage,
    setRowsPerPage,
    setSortBy,
    setDescending,
    setFilters,
    setFormData,
    clearError,
} = postsSlice.actions;
