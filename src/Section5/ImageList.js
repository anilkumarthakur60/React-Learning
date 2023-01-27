import React, {useState} from "react";
import ImageShow from "./ImageShow";

import ReactDOM from "react-dom/client";
function ImageList({images}) {

    const imageOnly = images.map((image) => {
        return <>
            <div className="col-3 p-3 shadow">
                <div className="card h-100 bg-light ">
                    <ImageShow key={image.id} image={image}/>
                </div>
            </div>
        </>
    });
    return (
        <>
            <div className="container ">
                <div className="row  d-flex flex-wrap bg-white">
                    {imageOnly}
                </div>
            </div>
        </>
    );
}

export default ImageList;