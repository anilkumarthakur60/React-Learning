import React from "react";
import BookShow from "./BookShow";


function BookList({list, onDelete, onEdit}) {



    const bookShowList = list.map((book, index) => {
        return (
            <BookShow book={book} itemKey={index} key={index} onDelete={onDelete} onEdit={onEdit}/>
        )
    })

    return (
        <div className="container ">
            <div className="row  d-flex flex-wrap bg-white">
                {bookShowList}
            </div>
        </div>
    )


}


export default BookList;