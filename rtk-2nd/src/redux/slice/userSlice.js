import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/api.js";
import axios from "axios";
import { axiosInstance } from "../../utils/axiosInstance.js";

const initialState = {
  data: [],
  formData: {
    email: "admin@gmail.com",
    password: "password",
  },
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
  authUser: localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser"))
    : {},
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
      return rejectWithValue(error.response);
    }
  }
);

const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue, getState }) => {
    try {
      const res = await axiosInstance.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const logoutUser = createAsyncThunk(
  "users/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`${apiUrl}/auth/logout`);
      return res.data;
    } catch (error) {
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
    clearError(state, action) {
      const { fieldName } = action.payload;
      delete state.error[fieldName];
    },

    logout(state) {
      state.authUser = {};
      localStorage.removeItem("access_token");
      localStorage.removeItem("authUser");
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
      state.loading = false;
      state.error = action.payload.data.errors;
    });

    builder.addCase(registerUserAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.authUser = action.payload.data;

      localStorage.clear();

      localStorage.setItem("access_token", action.payload.data.access_token);
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          id: action.payload.data.id,
          name: action.payload.data.name,
          email: action.payload.data.email,
        })
      );

      window.location.href = "/dashboard";
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data.errors;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.authUser = action.payload.data;

      localStorage.clear();

      localStorage.setItem("access_token", action.payload.data.access_token);
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          id: action.payload.data.id,
          name: action.payload.data.name,
          email: action.payload.data.email,
        })
      );

      window.location.href = "/dashboard";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload.data.errors;
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.authUser = {};
      localStorage.clear();

      window.location.href = "/";
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data.errors;
    });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;

export { fetchUsers, registerUserAction, loginUser, logoutUser };
export const {
  setPage,
  setRowsPerPage,
  setSortBy,
  setDescending,
  setFilters,
  setFormData,
  clearError,
} = userSlice.actions;
