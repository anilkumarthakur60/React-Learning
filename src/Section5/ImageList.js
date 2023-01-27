import React from "react";
import ReactDOM from "react-dom/client";
import ImageShow from "./ImageShow";

function ImageList({images}) {

    // function  handleChange(event) {
    //     increasePage(event.target.value);
    //     console.log(increasePage(event.target.value))
    // }


    const imageOnly = images.map((image) => {
        return <>
            <div className="col-sm-3 my-3 px-3">
                <div className="card h-100 shadow-lg">
                    <ImageShow  key={image.id} image={image}/>
                </div>
            </div>
        </>
    });


    console.log('---------images logging--------', images)

    return (
        <>

            <div className="container my-5">

                <div className="row  d-flex flex-wrap bg-white">
                  {imageOnly}
                </div>

            </div>
        </>

    );
}

export default ImageList;