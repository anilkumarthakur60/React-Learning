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
    totalAmount: 0,
    totalCount: 0,

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
        getCartTotal: (state) => {
            let { totalAmount, totalCount } = state.data.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;

                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalCount += amount;
                    return cartTotal;
                },
                {
                    totalAmount: 0,
                    totalCount: 0,
                }
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount;
        },
        remove: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
        increase: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
        },
        decrease: (state, action) => {
            state.data = state.data
                .map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, amount: item.amount - 1 };
                    }
                    return item;
                })
                .filter((item) => item.amount !== 0);
        },
        clearCart: (state) => {
            state.data = [];
        },
        getCartItems: (state) => {
            state.data = data;
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
    clearCart,
    getCartItems,
    getCartTotal,
    remove,
    increase,
    decrease,
} = cartSlice.actions;
