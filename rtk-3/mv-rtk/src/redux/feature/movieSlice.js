import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../api.js";

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
  filters: {},
};

const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async (payload, { getState }) => {
    const res = await axios.get(`${apiUrl}/movie`, {
      params: {
        ...getState().movies.pagination,
        filters: JSON.stringify(getState().movies.filters),
      },
    });
    return res.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
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

    getMovie(name) {
      return name;
    },
    setMovie(state, action) {
      state.data =  action.payload.Search;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

const movieReducer = movieSlice.reducer;

export default movieReducer;

export { fetchMovies };

export const {
  setPage,
  setRowsPerPage,
  setSortBy,
  setDescending,
  setFilters,
  setFormData,
  clearError,
  logout,

  getMovie,
  setMovie,
} = movieSlice.actions;
