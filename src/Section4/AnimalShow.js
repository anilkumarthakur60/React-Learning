import React, {useState} from "react";

import bird from "../Assets/images/Svg/bird.svg";
import cat from "../Assets/images/Svg/cat.svg";
import cow from "../Assets/images/Svg/cow.svg";
import dog from "../Assets/images/Svg/dog.svg";
import gator from "../Assets/images/Svg/gator.svg";
import heart from "../Assets/images/Svg/heart.svg";
import horse from "../Assets/images/Svg/horse.svg";
import './animalShow.css'


const svgMap = {
    bird: bird,
    cat: cat,
    cow: cow,
    dog: dog,
    gator: gator,
    heart: heart,
    horse: horse,
};


const svgMaps = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
};

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    }


    return <div className="col-2" onClick={handleClick}>

        <img className="img-fluid" src={svgMap[type]} alt={type}/>
        {10+10*clicks+'px'}
        <img className="img-fluid" src={heart} alt={type} style={{width:10+10*clicks+'px'}}/>
    </div>;
}

export default AnimalShow;