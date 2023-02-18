import {createSlice} from "@reduxjs/toolkit";
import  {fetchUsers} from "../thunks/fetchUsers";
import  {addUsers} from "../thunks/addUsers";

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
    }
});

export const {
    deleteUser,
    addUser

} = userSlice.actions;

export const userReducer = userSlice.reducer;