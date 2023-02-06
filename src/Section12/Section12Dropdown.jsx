import React, {useState} from "react";

function  Section12Dropdown( {items,value,onChange} ) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = items.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={handleClick}>{value?.label || 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}
export  default  Section12Dropdown;