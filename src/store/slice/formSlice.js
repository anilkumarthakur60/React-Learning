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
            state.carForm.name=action.payload.name;
            state.carForm.cost=action.payload.cost;
        },
        clearFormData(state, action) {
            state.carForm={
                name: null,
                cost: null,
                id: nanoid()
            };
        }
    }
});

export const {addFormData,clearFormData} = formSlice.actions;

export const formReducer= formSlice.reducer;