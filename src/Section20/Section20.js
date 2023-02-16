import CarForm from "./Component/CarForm";
import CarList from "./Component/CarList";
import CarSearch from "./Component/CarSearch";
import CarValue from "./Component/CarValue";

function Section20() {
    return (
        <div className="">
            <div >
                <CarForm></CarForm>
                <CarSearch></CarSearch>
                <CarList></CarList>
                <CarValue></CarValue>
            </div>
        </div>
    )
}

export default Section20;