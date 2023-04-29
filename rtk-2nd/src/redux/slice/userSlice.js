import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api.js";
import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance.js";

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
  user: {},
  profile: {},
  authUser: {
    loading: false,
    error: {},
    userInfo: {},
  },
};

const fetchUsers = createAsyncThunk(
  "users/fetch",

  async (payload, { rejectWithValue, getState }) => {
    const { pagination, filters } = getState().users;
    try {
      const res = await axios.get(`${apiUrl}/users`, {
        params: {
          ...pagination,
          filters: JSON.stringify(filters),
        },
      });
      return res.data;
    } catch (error) {
      console.log("---------data logging--------", error);
      return rejectWithValue(error.response);
    }
  }
);

const registerUserAction = createAsyncThunk(
  "users/register",
  async (
    { name, email, password, password_confirmation },
    { rejectWithValue }
  ) => {
    try {
      const res = await axiosInstance.post(`${apiUrl}/auth/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      return res.data;
    } catch (error) {
      console.log("---------data logging--------", error);
      return rejectWithValue(error.response);
    }
  }
);

const userSlice = createSlice({
  name: "users",
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("---------data logging--------", action.payload);
      state.loading = false;
    });

    builder.addCase(registerUserAction.pending, (state) => {
      state.authUser.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      console.log("----------logging data----------", action.payload);

      state.authUser.loading = false;
      state.authUser.userInfo = action.payload.data;
      localStorage.setItem("access_token", action.payload.data.access_token);
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      console.log("---------data logging--------", action.payload);
      state.authUser.loading = false;
      state.authUser.error = action.payload;
    });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;

export { fetchUsers, registerUserAction };
