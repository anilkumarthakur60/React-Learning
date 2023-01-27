import React from "react";

function ImageShow({image}) {


    const tags= image?.tags?.map((tag,index) => (
        <div>
            <div className="badge bg-success fs-6 py-1 my-1 overflow-auto" >{tag.title}</div>
        </div>
    ))
    return (
        <>

            <div className="">
                <img src={image?.links?.download} className="img-fluid" alt={image?.description}/>
            </div>
            <div className="px-1 ">
                <p className="text-center">{image?.description}</p>
                {tags}
            </div>


        </>

    );
}

export default ImageShow;