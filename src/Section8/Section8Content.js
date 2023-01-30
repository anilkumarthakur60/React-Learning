import React, {useContext} from "react";
import BookContext from "../Context/books";

function  Section8Content({listData}) {

    const {count,incrementCount} = useContext(BookContext);

    const renderedBooks = listData.map((book) => {
        return <li key={book.id}> {book.id}. {book.name}</li>

    })

    return (
        <div>
            Count : {count}
            {renderedBooks}
            <button className={`btn btn-sm btn-danger`} onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default Section8Content