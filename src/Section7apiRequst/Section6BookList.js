import React from "react";
import Section6BookShow from "./Section6BookShow";


function Section6BookList({list, onDelete, onEdit}) {



    const bookShowList = list.map((book, index) => {
        return (
            <Section6BookShow book={book} itemKey={index} key={index} onDelete={onDelete} onEdit={onEdit}/>
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


export default Section6BookList;