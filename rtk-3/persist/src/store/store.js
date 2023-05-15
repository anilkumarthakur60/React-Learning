

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice.js";


const store = configureStore({
    reducer: {
        movies: cartReducer
    },
});
export default store;
