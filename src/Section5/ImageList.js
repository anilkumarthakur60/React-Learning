import React from "react";
import ReactDOM from "react-dom/client";
import ImageShow from "./ImageShow";
function ImageList() {

    return (
        <div className={``} style={{backgroundColor: '#f8d7da'}}>
            <div className="row">
               <ImageShow />
            </div>
        </div>
    );
}
export default ImageList;