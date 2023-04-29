import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slice/postsSlice.js";
import userReducer from "../slice/userSlice.js";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});

export default store;
