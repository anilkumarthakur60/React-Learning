import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import  {faker} from "@faker-js/faker";

const pause = (duration) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, duration)
    });
}

const addUsers = createAsyncThunk(
    "users/add",
      async () => {
        const response = await axios.post("http://localhost:3005/users",{
            name:faker.name.fullName(),
        });
        // await pause(1000);
        return response.data;
      }

);

// fetchUsers.pending
// fetchUsers.fulfilled
// fetchUsers.rejected


//Dev only


export {
    addUsers
}