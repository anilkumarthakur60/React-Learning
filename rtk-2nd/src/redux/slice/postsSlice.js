import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import {apiUrl} from "../../utils/api.js";
import axios from "axios";


const  initialState = {
    data: [],
    formData:{},
    loading: false,
    error: {},
    pagination:{
        page:1,
        rowsPerPage:20,
        sortBy:"id",
        descending:true
    },
    filters:{

    }
}

 const fetchPosts = createAsyncThunk(
    'posts/fetch',
    async (payload,{
        rejectWithValue,getState,dispatch
    } ) => {
        const res= await axios.get(`${apiUrl}/posts`,{
            params:{
            filters:JSON.stringify(payload)
        }})
        return res.data

    })
const fetchPostsDetail = createAsyncThunk(
    'posts/fetchDetail',
    async () => {
        const res= await axios.get(`${apiUrl}/posts`)
        return res.data

    })

const postsSlice= createSlice({
    name: "posts",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

        builder.addCase(fetchPosts.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{

            state.loading = false
            state.data = action.payload.data
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            console.log('---------data logging--------',action.payload);
            state.loading = false
            // state.error = action.payload.error
        })
        builder.addCase(fetchPostsDetail.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchPostsDetail.fulfilled,(state,action)=>{
            state.loading = false
            state.formData = action.payload.data
        })
        builder.addCase(fetchPostsDetail.rejected,(state,action)=>{
            console.log('---------data logging--------',action.payload);
            state.loading = false
            // state.error = action.payload.error
        })
    }
})

const postsReducer=postsSlice.reducer

export  default postsReducer

export  {
    fetchPosts,
    fetchPostsDetail
}

