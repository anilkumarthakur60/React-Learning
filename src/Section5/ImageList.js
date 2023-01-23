import React from "react";
import ReactDOM from "react-dom/client";
import ImageShow from "./ImageShow";
function ImageList({images}) {

    return (
        <div className={`mt-2`} style={{backgroundColor: '#f8d7da'}}>
            {images}
            {/* eslint-disable-next-line array-callback-return */}
            {images.map((image) => {
               // <ImageShow image={image} />

            })}
        </div>
    );
}
export default ImageList;