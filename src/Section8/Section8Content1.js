import React, {useContext} from "react";
import BookContext from "../Context/books";

function  Section8Content({listData}) {


    const renderedBooks = listData.map((book) => {
        return <li key={book.id}> {book.id}. {book.name}</li>

    })

    return (
        <div>

            {renderedBooks}

        </div>
    )
}

export default Section8Content