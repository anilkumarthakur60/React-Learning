import React, {useState} from "react";
import ImageShow from "./ImageShow";

function ImageList({images}) {


    const [page, setPage] = useState(1);
    // function  handleChange(event) {
    //     increasePage(event.target.value);
    //     console.log(increasePage(event.target.value))
    // }



    const imageOnly = images.map((image, index) => {
        return <>
            <div className="col-3 p-3 ">
                <div className="card h-100 ">
                    <ImageShow key={index} image={image}/>
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