import React from "react";

import ReactDOM from "react-dom/client";
import heart from "../Assets/images/Svg/heart.svg";
import  liuyt from "../Assets/images/a1.png";
function ImageShow({image}) {

    return (
        <div>
            <div className="col-2" >
                {image}
                <img src="as" className="img-fluid"  alt={`jsdg`}/>
            </div>;
        </div>
    );
}
export default ImageShow;