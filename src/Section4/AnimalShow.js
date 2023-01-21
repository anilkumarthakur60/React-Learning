import React,{useState} from "react";


function AnimalShow() {


    //
    const [state, setState] = useState(false);
    const [countData, setCountData] = useState(0);
    console.debug(useState(50))
    const handleClick = () => {
        setState(!state);
        console.log("Button Clicked");
        console.log(s1,s2)
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

    function  arrayData(){
        return [1,2,3,4,5,6,7,8,9,10];
    }
    const [s1,s2]=arrayData();

    return (
        <div>

            {state ? <h1>True</h1> : <h1>False</h1>}
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

            <button type="button" className="btn btn-md btn-danger mx-2 "
                    onClick={(event) => {

                        handleClick();

                    }}


            >Click Me
            </button>

            <button type="button" className="btn btn-md btn-danger mx-2 "
                    onClick={() => {
                        setCountData(countData + 1);
                    }}
            >Count={countData}
            </button>
            <button type="button" className="btn btn-md btn-danger mx-2 "
                    onClick={() => {
                        setCountData(countData - 1);
                    }}
            >Result={countData}
            </button>
        </div>
    );
}

export default AnimalShow;