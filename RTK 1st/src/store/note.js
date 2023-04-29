import {createSlice, configureStore, createAsyncThunk} from "@reduxjs/toolkit";

const  initialState = {
    posts: [],
    loading: false,
    error: {},
}
const api="https://jsonplaceholder.typicode.com/posts"



const fetchPosts=createAsyncThunk("posts/fetchPosts",
    async () => {
        const response = await fetch(api);
        return  await response.json();
    })


const postSlice= createSlice({
    name: "posts",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = {};
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state,action) => {
            state.loading = false;
            state.error = {
                message: action.error.message,
            }
        }
    }
})