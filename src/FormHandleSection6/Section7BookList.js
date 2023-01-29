import React from "react";
import Section7BookShow from "./Section7BookShow";


function Section7BookList({list, onDelete, onEdit}) {



    const bookShowList = list.map((book, index) => {
        return (
            <Section7BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
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


export default Section7BookList;