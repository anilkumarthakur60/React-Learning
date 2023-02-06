import React, {useState} from "react";
import  {GoChevronDown,GoChevronUp} from "react-icons/go";

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
            <div

                className="hover:bg-sky-100 rounded cursor-pointer p-1"

                onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <div className="flex justify-items-center cursor-pointer border rounded p-3 shadow bg-white w-full " onClick={handleClick}>
                {value?.label || 'Select...'}
            <GoChevronDown className={`text-lg`} />
            </div>
            {isOpen && <div className="absolute top-full rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
        </div>
    );
}
export  default  Section12Dropdown;