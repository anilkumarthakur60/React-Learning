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
    }
    const handleClicks = () => {
        setAnimal([...animal, getRandomAnimals()]);
    }
    const handleCopy = () => {
    }
    const handleCut = () => {
    }
    const handlePaste = () => {
    }

    function arrayData() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    const [s1, s3] = arrayData();
    const renderAnimals = animal.map((item, index) => {
        return <AnimalShow key={index} type={item}/>
    })

    return (
        <div className={``} style={{backgroundColor: '#f8d7da'}}>


            {state ? <h6>True</h6> : <h6>False</h6>}
            <h6 onCopy={handleCopy} onCut={handleCut}
                onMouseOver={(e) => {
                }}

            >Animal Show</h6>
            <input
                onPaste={handlePaste}

                onChange={(event) => {
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