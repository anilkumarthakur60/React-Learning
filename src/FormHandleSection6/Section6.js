import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import BookCreate from "./BookCreate.js";
import BookList from "./BookList";


function  Section6() {
    const [list, setList] = useState([]);

    const [bookData, setBookData] = useState({});

    const handleBookCreate = (data) => {
        setBookData(data)
        setList([ data,...list])
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Section 6</h1>
                        <BookList list={list}  />
                        <hr/>
                        <BookCreate onCreateBook={handleBookCreate} oncl/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section6;