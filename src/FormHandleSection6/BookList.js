import React, {useState} from "react";
import BookShow from "./BookShow";
import ImageShow from "../Section5/ImageShow";


function BookList({list}) {


    const  booklist = list?.map((book,index) => {
        return (
            <div className="col-3  shadow">
                <div className="card h-100 bg-light px-3 ">
                    <BookShow book={book} key={index} />
                </div>
            </div>

        )

    });
    return (
        <div className="container ">
            <div className="row  d-flex flex-wrap bg-white">
                {booklist}
            </div>
        </div>
    )


}


export default BookList;