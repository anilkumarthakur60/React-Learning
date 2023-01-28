import React, {useState} from "react";
import BookCreate from "./BookCreate.js";
import BookList from "./BookList";


function Section6() {
    const [list, setList] = useState([]);


    const [books, setBooks] = useState([
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}
    ]);


    const updateBookById = (id, title) => {
        const newList = books.map((book) => {
            if (book.id === id) {
                // return {...book, title:title};
                return {...book, title};
            }
            return book;
        });
        setBooks(newList);
    }

    const [book,setBook]=useState({
        id:'',
        title:'',
    })
    const handleChanges = (e) => {
        console.log(e.target.id, e.target.value)
       const newBook= {
            id:books.length+1,
            name:e.target.value
        }
        console.log(newBook)
        setBook(newBook)
    }
    const addBooks = () => {
        const newBook = {
            id: books.length + 1,
            name: book.name

        };
        setBooks([...books, newBook]);

    }


    const handleBookCreate = (data) => {
        const addList = [...list, data];
        setList(addList);
    };


    const removeBookById = (id) => {
        const newList = list.filter((book) => {
            return book.id !== id;
        });
        setList(newList);
    }



    return (
        <>
            <div className="container">
                <div className="row">
                    {books.map((book, index) => {
                        return (
                            <div className="col-4 mt-4">
                                <div className="card h-100 bg-light px-3 ">
                                    <div className="card-body">

                                        <div className="d-flex">
                                            <button className="ms-auto btn btn-primary btn-sm me-1" onClick={() => {
                                                updateBookById(book.id, "Hello World")

                                            }}>
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                            <button className="btn btn-sm btn-danger " onClick={() => {
                                                removeBookById(book.id)

                                            }}>

                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                        <h5 className="card-title">{book.name}({book.id})</h5>

                                    </div>
                                </div>
                            </div>
                        );
                    })}


                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            addBooks()
                        }
                    }></form>
                    <input id="name"
                           value={book.name}
                           onChange={(e) => {
                               handleChanges(e)
                           }
                           }
                    />
                    <button className={`btn btn-primary`}

                            onClick={
                                () => {
                                    addBooks()
                                }}>
                        Add Book
                    </button>


                </div>
                <div className="row">


                    <div className="col-12">
                        <h1>Section 6</h1>
                        <BookList list={list}/>
                        <hr/>
                        <BookCreate onCreateBook={handleBookCreate} oncl/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section6;