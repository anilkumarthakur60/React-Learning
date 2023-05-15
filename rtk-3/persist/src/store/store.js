

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice.js";

import  storage from  "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const pesistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducers = combineReducers({
    cart: cartReducer,
});

const persistedReducer = persistReducer(pesistConfig, reducers);


const store = configureStore({
    reducer: persistedReducer
});
export default store;

