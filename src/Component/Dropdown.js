import {useEffect, useState} from 'react';

function Dropdown({ options, selection, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    //
    // const dropdown=document.querySelector('.w-48');
    // const handleClicks=(event)=>{
    //     if(dropdown.contains(event.target)){
    //     }else{
    //     }
    // }
    // document.addEventListener('click',handleClicks,true)
    const handleClick = () => {
        setIsOpen(!isOpen);
    };




    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON???
        onSelect(option);
    };




    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={handleClick}>{selection?.label || 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;