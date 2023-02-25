import {createSlice} from "@reduxjs/toolkit";
import  {fetchUsers} from "../thunks/fetchUsers";
import  {addUsers} from "../thunks/addUsers";
import  {deleteUser} from "../thunks/deleteUser";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        searchUser: null,
        error: null,

    },
    reducers: {
        addUser(state, action) {
            // state.cars.push(action.payload);
        },
        deleteUsers(state, action) {
            // state.cars = state.cars.filter((car) => car.id !== action.payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(addUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => user.id !== action.payload)
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

    }
});

export const {
    addUser,

} = userSlice.actions;

export const userReducer = userSlice.reducer;