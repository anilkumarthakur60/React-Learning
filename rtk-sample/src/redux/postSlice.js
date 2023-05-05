import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {apiUrl} from "../utils/api.js";

const initialState = {
    data: [],
    formData: {},
    loading: false,
    error: {},
    pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: "id",
        descending: true,
    },
    filters: {
        id: 1,
        categoryIds: ['a','b', 'c'],
        title: "title",
    },
};
// GET /posts?filters['id']=1&filters['categoryIds']=1&filters['title']=title

const fetchPosts = createAsyncThunk(
    "posts/fetch",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        const res = await axios.get(`${apiUrl}/posts`, {
            params: {
                ...getState().posts.pagination,
                filters: JSON.stringify(getState().posts.filters),
            },
        });
        return res.data;
    }
);
const fetchPostsDetail = createAsyncThunk("posts/fetchDetail", async () => {
    const res = await axios.get(`${apiUrl}/posts`);
    return res.data;
});

const postsSlice = createSlice({
    name: "posts",
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
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            console.log("---------data logging--------", action.payload);
            state.loading = false;
            // state.error = action.payload.error
        });
        builder.addCase(fetchPostsDetail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPostsDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.formData = action.payload.data;
        });
        builder.addCase(fetchPostsDetail.rejected, (state, action) => {
            console.log("---------data logging--------", action.payload);
            state.loading = false;
            // state.error = action.payload.error
        });
    },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;

export { fetchPosts, fetchPostsDetail };

export const {
    setPage,
    setRowsPerPage,
    setSortBy,
    setDescending,
    setFilters,
    setFormData,
    clearError,
    logout,
} = postsSlice.actions;
