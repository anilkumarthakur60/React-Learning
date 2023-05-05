import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../redux/postSlice.js";
import  usersReducer from "../redux/userSlice.js";
const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
    },
});

export default store;
