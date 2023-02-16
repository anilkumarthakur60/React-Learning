import CarForm from "./Component/CarForm";
import CarList from "./Component/CarList";
import CarSearch from "./Component/CarSearch";
import CarValue from "./Component/CarValue";

import {store} from "../store";
import {Provider} from "react-redux";


function Section20() {
    return (
        <div className="">
            <Provider store={store}>
                <div>
                    <CarForm></CarForm>
                    <CarSearch></CarSearch>
                    <CarList></CarList>
                    <CarValue></CarValue>
                </div>
            </Provider>
        </div>
    )
}

export default Section20;