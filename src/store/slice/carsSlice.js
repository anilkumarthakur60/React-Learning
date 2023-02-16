import {createSlice} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        cars: [],
        searchTerms: null
    },
    reducers: {
        addCars(state, action) {
            state.cars.push(...state.cars, action.payload)
        },

        changeSearchTerm(state, action) {
            state.searchTerms = action.payload;
        }
    }
});

export const {addCars, changeSearchTerm} = carsSlice.actions;

export const  carsReducer=carsSlice.reducer;