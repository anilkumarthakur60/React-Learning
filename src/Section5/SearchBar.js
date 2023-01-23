import React, {useState} from "react";

function SearchBar({handleClick}) {

    const [state, setState] = useState('');

    const  handleFormSubmit = (event) => {
        event.preventDefault();
        // handleClick(state);
    }

    const handleChangeEvent = (event) => {
        // setState(event.target.value.replace(/[^a-zA-Z ]/g, ""));
        setState(event.target.value)
        handleClick(state)
    }
    const submitButton = () => {
        handleClick(state)
    }
    return (
        <div className={``} style={{backgroundColor: '#f8d7da'}}>
            <div className="">
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            value={state}
                            name="search"
                            className="form-control"
                            onChange={handleChangeEvent} placeholder="Recipient's username"
                            aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={submitButton} type="button"
                                id="button-addon2">Button
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default SearchBar;