import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/redux-toolkit.cjs.development";


const  initialState = {
    posts: [],
    loading: false,
    error: {},
}
const api="https://jsonplaceholder.typicode.com/posts"



const fetchPostsss=createAsyncThunk("posts/fetchPostsss",
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
        builder.addCase(fetchPostsss.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchPostsss.fulfilled,(state, action)=>{
            state.posts = action.payload;
            state.loading = false;
            state.error = {};
        })
        builder.addCase(fetchPostsss.rejected,(state,action)=>{

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
store.dispatch(fetchPostsss())