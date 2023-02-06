import React, {useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Dropdown from "../Component/Dropdown";

function Section12() {


    const [selection,setSelection] = useState(null);
    const items= [
        {
            value: 1,
            label: "What is React?",
        },
        {
            value: 2,
            label: "Why use React?",

        },
        {
            value: 3,
            label: "How do you use React?",

        },
    ];


    const handleSelection= (value) => {
        console.log(value)
    }


    return (
        <div>
            <Dropdown options={items} selection={selection} onSelect={handleSelection}></Dropdown>
        </div>
    )
}
export default Section12;