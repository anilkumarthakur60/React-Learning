import {createSlice} from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        formData: {
            name: null,
            cost: null,
        }
    },
    reducers: {

        addFormData(state, action) {
            state.formData=action.payload;
        },
    }
});

export const {addFormData} = formSlice.actions;

export const formReducer= formSlice.reducer;