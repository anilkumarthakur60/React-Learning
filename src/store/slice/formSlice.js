import {createSlice,nanoid} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        carForm: {
            name: null,
            cost: null,
            id: nanoid()
        }
    },
    reducers: {

        addFormData(state, action) {
            state.carForm=action.payload;
        },
    }
});

export const {addFormData} = formSlice.actions;

export const formReducer= formSlice.reducer;