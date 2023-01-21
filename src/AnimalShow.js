import React from "react";

function AnimalShow() {

    const handleClick = () => {
        console.log("Button Clicked");
    }
    const handleCopy = () => {
        console.log("Text Copied");
    }
    const handleCut = () => {
        console.log("Text cut");
    }
    const handlePaste = () => {
        console.log("Text paste");
    }

    return (
        <div>
            <h1 onCopy={handleCopy} onCut={handleCut}
                onMouseOver={(e) => {
                    console.log('hover logging');
                }}

            >Animal Show</h1>
            <input
                onPaste={handlePaste}

                onChange={(event) => {
                    console.log(event.target.value);
                }
                } type="text"/>
            <button type="button" className="btn btn-sm btn-danger" onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default AnimalShow;