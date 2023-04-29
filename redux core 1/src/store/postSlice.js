import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/redux-toolkit.cjs.development";


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
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchPosts.fulfilled,(state, action)=>{
            state.posts = action.payload;
            state.loading = false;
            state.error = {};
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{

            state.posts = [];
            state.loading = false;
            state.error = {
                message: action.error.message,
            }
        })
    }
})

const postReducer = postSlice.reducer


const  store = configureStore({
    reducer: postReducer

})

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchPosts())