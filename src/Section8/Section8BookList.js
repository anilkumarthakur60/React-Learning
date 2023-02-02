import React, {useContext} from "react";
import Section8BookShow from "./Section8BookShow";
import BookContext from "../Context/books1";


function Section8BookList() {


    const {list} = useContext(BookContext);

    const bookShowList = list.map((book, index) => {
        return (
            <div className="col-4">
            </div>
            // <Section8BookShow book={book}  key={index} />
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


export default Section8BookList;