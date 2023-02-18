import {createSlice} from "@reduxjs/toolkit";
import  {fetchUsers} from "../thunks/fetchUsers";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [
            {
                name: "BMW",
                cost: 100000,
                id: 1
            },
            {
                name: "BMW1",
                cost: 1000001,
                id: 2
            },
            {
                name: "BMW2",
                cost: 1000002,
                id: 3
            },
            {
                name: "BMW3",
                cost: 1000003,
                id: 4
            },
        ],
        searchUser: null,

    },
    reducers: {
        addUser(state, action) {
            // state.cars.push(action.payload);
        },
        deleteUser(state, action) {
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
    }
});

export const {
    addUser,
    deleteUser

} = userSlice.actions;

export const userReducer = userSlice.reducer;