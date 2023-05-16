import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice.js";
import postReducer from "../redux/post/postSlice.js";

const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer,
    },
});

export default store;
