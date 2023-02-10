import React, {useState} from "react";
import Link from "../Component/Link";
import Route from "../Component/Route";
import Accordion from "../Component/Accordion";
import Section12Dropdown from "../Section12/Section12Dropdown";
import Sidebar from "../Component/Sidebar";

function Section131() {
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
        <div>

            <Sidebar></Sidebar>

            <div className="">
                <Route path="/accordion">
                    <Accordion items={items}></Accordion>
                </Route>
                <Route path="/dropdown">
                    <Section12Dropdown items={options} value={selection} onChange={handleSelect}/>

                </Route>
            </div>
        </div>
    );
}

export default Section131;