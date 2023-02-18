import  {configureStore} from "@reduxjs/toolkit";
import  {carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm} from "./slice/carsSlice";
import  {formReducer,addFormData,clearFormData} from "./slice/formSlice";
import {userReducer,addUser,deleteUser} from "./slice/userSlice";

const  store = configureStore({
    reducer: {
        cars: carsReducer,
        forms: formReducer,
        users:userReducer
    }
}
);
export {
    store,
    carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm,
    formReducer,addFormData,clearFormData,
    userReducer,addUser,deleteUser,

};

export  * from "./thunks/fetchUsers";