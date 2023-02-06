import React, {useState} from "react";
import {GoChevronDown} from "react-icons/go";
import Dropdown from "../Component/Dropdown";

function Section12() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    return (
        <Dropdown options={options} selection={selection} onSelect={handleSelect} />
    );
}
export default Section12;