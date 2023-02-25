import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const pause = (duration) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, duration)
    });
}

const fetchUsers = createAsyncThunk(
    "users/fetch",
    async () => {
        const response = await axios.get("http://localhost:8000/api/react/posts");
        await pause(1000);
        return response.data.data;
    },
);

// fetchUsers.pending
// fetchUsers.fulfilled
// fetchUsers.rejected


//Dev only


export {
    fetchUsers
}