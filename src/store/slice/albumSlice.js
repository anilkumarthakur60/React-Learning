import {createSlice} from "@reduxjs/toolkit";

const albumSlice = createSlice({
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
        isLoading: false,
        error: null

    },
    reducers: {
        addUser(state, action) {
            // state.cars.push(action.payload);
        },
        deleteUser(state, action) {
            // state.cars = state.cars.filter((car) => car.id !== action.payload);
        },
    }
});

export const {
    addUser,
    deleteUser

} = albumSlice.actions;

export const albumReducer = albumSlice.reducer;