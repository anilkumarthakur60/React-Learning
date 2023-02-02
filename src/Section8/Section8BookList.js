import React, {useContext} from "react";
import Section8BookShow from "./Section8BookShow";
import useBooksContext from "../Hooks/useBooksContext";


function Section8BookList() {


    const {list} =useBooksContext();

    const bookShowList = list.map((book) => {
        return (

            <Section8BookShow book={book}  key={book.id} />
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