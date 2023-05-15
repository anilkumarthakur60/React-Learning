import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/api.js";

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
    categoryIds: ["a", "b", "c"],
    title: "title",
  },
};

const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (payload, { getState }) => {
    const res = await axios.get(`${apiUrl}/posts`, {
      params: {
        ...getState().posts.pagination,
        filters: JSON.stringify(getState().posts.filters),
      },
    });
    return res.data;
  }
);

const fetchPostsDetail = createAsyncThunk("posts/fetchDetail", async (id) => {
  const res = await axios.get(`${apiUrl}/posts/${id}`);
  return res.data;
});

const deleteItem = createAsyncThunk(
  "posts/delete",
  async (id, { dispatch }) => {
    const res = await axios.delete(`${apiUrl}/posts/${id}`);
    dispatch(fetchPosts());
    return res.data;
  }
);

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
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchPostsDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostsDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.formData = action.payload.data;
    });
    builder.addCase(fetchPostsDetail.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteItem.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteItem.rejected, (state) => {
      state.loading = false;
    });
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;

export { fetchPosts, fetchPostsDetail, deleteItem };

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
