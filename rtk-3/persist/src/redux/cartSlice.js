import {  createSlice } from "@reduxjs/toolkit";
import data from "../data.js";

const initialState = {
    data: data,
    formData: {},
    loading: false,
    error: {},
    pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: "id",
        descending: true,
    },
    filters: {},
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
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


    },

});

const cartReducer = cartSlice.reducer;

export default cartReducer;


export const {
    setPage,
    setRowsPerPage,
    setSortBy,
    setDescending,
    setFilters,
    setFormData,
    clearError,
    logout
} = cartSlice.actions;
