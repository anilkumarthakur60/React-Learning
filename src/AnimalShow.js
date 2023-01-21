import React from "react";
import ReactDOM from "react-dom/client";

function AnimalShow() {

    const handleClick = () => {
        console.log("Button Clicked");
    }
    return (
        <div className="App">
            <h1>Animal Show</h1>
            <button className="btn btn-sm btn-danger" onClick={handleClick()}>Click Me</button>
        </div>
    );
}
export default AnimalShow;