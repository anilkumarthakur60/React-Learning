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
        const response = await axios.get("http://localhost:8000/api/react/posts",{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },params: {
                page: 1,
                per_page: 100,
                sorBy: "id",
                descending: true
            }
        });
        // await pause(1000);
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