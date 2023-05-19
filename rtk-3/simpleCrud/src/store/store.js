import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice.js";
import postReducer from "../redux/post/postSlice.js";
import { postApi } from "../redux/post/postApi.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import { userApi } from "../redux/user/userApi.js";
import blogReducer from "../redux/blog/blogSlice.js";

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  blogs: blogReducer,
  [postApi.reducerPath]: postApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);

export default store;
