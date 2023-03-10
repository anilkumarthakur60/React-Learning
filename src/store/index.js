import  {configureStore} from "@reduxjs/toolkit";
import  {carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm} from "./slice/carsSlice";
import  {formReducer,addFormData,clearFormData} from "./slice/formSlice";
import {userReducer,addUser} from "./slice/userSlice";
import  {setupListeners} from "@reduxjs/toolkit/query";
import {albumsApi} from "./apis/albumApi";


const  store = configureStore({
    reducer: {
        cars: carsReducer,
        forms: formReducer,
        users:userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumApi.middleware),
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(albumsApi.middleware)
    }
}
);
export {
    store,
    carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm,
    formReducer,addFormData,clearFormData,
    userReducer,addUser,

};

setupListeners(store.dispatch);

export  * from "./thunks/fetchUsers";
export  * from  "./thunks/addUsers";
export  * from  "./thunks/deleteUser";
export {useFetchAlbumsQuery,useFetchAllAlbumsQuery,useCreateAlbumMutation} from "./apis/albumApi";
