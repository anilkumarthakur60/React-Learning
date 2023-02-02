import React, {useContext} from "react";
import BooksContext from "../Context/books1";

function useBooksContext() {
    const context = useContext(BooksContext);
    if (!context) {
        throw   new Error('useBooksContext must be used within a BooksProvider');
    }
    return context;
}

export  default useBooksContext;