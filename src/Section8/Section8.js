import React, {useContext} from "react";

import BookContext from "../Context/books";

function Section8() {
    const m2 = useContext(BookContext);
    return (
        <div>
            <h1>{m2}</h1>
        </div>
    )
}

export default Section8