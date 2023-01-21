import React, {useState} from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
    const animals = [

        "bird",
        "cat",
        "cow",
        "dog",
        "gator",
        "heart",
        "horse",


    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function Section41() {

    const [state, setState] = useState(false);
    const [countData, setCountData] = useState(0);

    const [animal, setAnimal] = useState([]);


    const handleClick = () => {
        setState(!state);
        console.log("Button Clicked");
        console.log(s1, s2)
    }
    const handleClicks = () => {
        setAnimal([...animal, getRandomAnimals()]);
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

    function arrayData() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    const [s1, s2] = arrayData();
    const renderAnimals = animal.map((item, index) => {
        return <AnimalShow key={index} type={item}/>
    })

    return (
        <div className={``} style={{backgroundColor: '#f8d7da'}}>


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
            <hr style={{border: "10px solid green"}}/>
            <button type="button" className="btn btn-md btn-success m-2  " onClick={handleClicks}>
                Add Animal
            </button>
            <div className="row">
                {renderAnimals}
            </div>


        </div>
    );
}

export default Section41;