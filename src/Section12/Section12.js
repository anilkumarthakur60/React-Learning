import React, {useState} from "react";
import Dropdown from "../Component/Dropdown";
import Section12Dropdown from "./Section12Dropdown";

function Section12() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ];

    return (
        <div>
            <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
            <Section12Dropdown items={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default Section12;