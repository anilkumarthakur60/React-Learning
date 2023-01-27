import React from "react";
import ReactDOM from "react-dom/client";
import ImageShow from "./ImageShow";
function ImageList({images}) {

    // function  handleChange(event) {
    //     increasePage(event.target.value);
    //     console.log(increasePage(event.target.value))
    // }



    console.log('---------images logging--------',images)

    return (
        <div className={`mt-2`} style={{backgroundColor: '#f8d7da'}}>

            {/*<input type="number"  onChange={handleChange}  />*/}
            <h6>Total Image{images.length}  </h6>
            <div className="row">   {images.map((image) => {

                    return (
                        <ImageShow clasName={`col-2`} key={image.id} image={image}/>
                    );
                })}
            </div>
        </div>
    );
}
export default ImageList;