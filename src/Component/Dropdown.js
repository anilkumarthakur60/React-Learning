import React, {useEffect, useState} from "react";



function  Dropdown({options,selection, onSelect}) {
    const  [selectedOption, setSelectedOption] = useState();
    const  [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (event) => {
        setIsOpen((isOpen) => !isOpen);
        onSelect(event);
    }
    const renderOptions = options.map((option) => {
        return (
            <div onClick={()=>handleOptionClick(option)}  key={option.value} >
                {option.label}
            </div>
        );
    });

    const  handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    }
    useEffect(() => {
            onSelect(selectedOption);
        },
        [selectedOption]
    );

    let content='Select...';
    if(selection){
        content=selection.label;
    }

    return(
        <div>


            <div className="" onClick={handleClick}>Select</div>
            {isOpen && <div className="">{renderOptions}</div>}
        </div>
    )
}
export  default Dropdown;