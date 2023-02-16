import  {configureStore} from "@reduxjs/toolkit";
import  {carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm} from "./slice/carsSlice";
import  {formReducer,addFormData} from "./slice/formSlice";

const  store = configureStore({
    reducer: {
        cars: carsReducer,
        forms: formReducer
    }
}
);
export {
    store,
    carsReducer,addCars,deleteCar,searchCarItem,changeSearchTerm,
    formReducer,addFormData


};