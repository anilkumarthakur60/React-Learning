import React, {useState} from "react";
import Route from "../Component/Route";
import Accordion from "../Component/Accordion";
import Section12Dropdown from "../Section12/Section12Dropdown";
import Sidebar from "../Component/Sidebar";
import Button from "../Component/Button";
import ModalPage from "../Section14/ModalPage";
import TablePage16 from "../Section16/TablePage16";
import CounterPage from "../Section17/CounterPage";
import Section17 from "../Section17/Section17";
import Section16 from "../Section16/Section16";
import Section15 from "../Section15/Section15";
import Section18 from "../Section18/Section18";
import Section19 from "../Section19/Section19";
import Section20 from "../Section20/Section20";
import Section21 from "../Section21/Section21";
import Section22 from "../Section22/Section22";

function MainSideBar() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ];

    const items = [
        {
            id: 1,
            title: "What is React?",
            content: "React is a front end javascript framework"
        },
        {
            id: 2,
            title: "Why use React?",
            content: "React is a favorite JS library among engineers"

        },
        {
            id: 3,
            title: "How do you use React?",
            content: "You use React by creating components"

        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">

            <div className="">

                <Sidebar></Sidebar>
            </div>

            <div className="col-span-2">
                <Route path="/accordion">
                    <Accordion items={items}></Accordion>
                </Route>
                <Route path="/dropdown">
                    <Section12Dropdown items={options} value={selection} onChange={handleSelect}/>
                </Route>
                <Route path="/button">
                    <Button rounded danger outline>Hello </Button>

                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage16/>
                </Route>
                <Route path="/counter">
                    <CounterPage/>
                </Route>
                <Route path="/section15">
                    <Section15/>
                </Route>
                <Route path="/section16">
                    <Section16/>
                </Route>
                <Route path="/section17">
                    <Section17/>
                </Route>
                <Route path="/section18">
                    <Section18/>
                </Route>
                <Route path="/section19">
                    <Section19/>
                </Route>
                <Route path="/section20">
                    <Section20/>
                </Route>
                <Route path="/section21">
                    <Section21/>
                </Route>
                <Route path="/section22">
                    <Section22/>
                </Route>
            </div>
        </div>
    );
}

export default MainSideBar;