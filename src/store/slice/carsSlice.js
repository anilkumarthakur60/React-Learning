import {createSlice} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        cars: [
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
        searchTerms: null
    },
    reducers: {
        addCars(state, action) {

            state.cars.push(action.payload);
        },
        changeSearchTerm(state, action) {
            state.searchTerms = action.payload;
        },
        deleteCar(state, action) {
            state.cars = state.cars.filter((car) => car.id !== action.payload);
        },
        searchCarItem(state, action) {
            state.cars  = state.cars.filter((car) => car.name === action.payload);

        }
    }
});

export const {
    addCars,
    changeSearchTerm,
    deleteCar,
    searchCarItem,

} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;