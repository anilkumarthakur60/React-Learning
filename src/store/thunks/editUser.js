import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const pause = (duration) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, duration)
    });
}

const editUser = createAsyncThunk(
    "users/edit",
    async(id) => {
        const response = await axios.put(`http://localhost:8000/api/posts/${id}`);
        return response.data?.data;
    }

);


export {
    editUser
}