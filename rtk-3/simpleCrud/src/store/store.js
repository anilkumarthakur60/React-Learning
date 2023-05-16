import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../redux/user/userSlice.js";
import userReducer from "../redux/post/postSlice.js";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: userReducer,
    },
});

export default store;
