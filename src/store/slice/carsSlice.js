import {createSlice} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        cars: [],
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
            state.cars = state.cars.filter((car) => car.name === action.payload);

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