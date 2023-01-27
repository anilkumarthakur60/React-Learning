import React from "react";

import ReactDOM from "react-dom/client";
import heart from "../Assets/images/Svg/heart.svg";
import  liuyt from "../Assets/images/a1.png";
function ImageShow({image}) {

    return (

                <img src={image?.links?.download} className="img-fluid"  alt={image?.description}/>

    );
}
export default ImageShow;