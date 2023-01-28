import React, {useState} from "react";
import BookCreate from "./BookCreate.js";
import BookList from "./BookList";
import Swal from "sweetalert2";


function Section6() {
    const [list, setList] = useState([]);

    const [fruit, setFruit] = useState(
        {
            name: "Apple",
            color: "Red1"
        });

    const [books, setBooks] = useState([
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}
    ]);

    const [book, setBook] = useState({
        id: '',
        title: '',
    })


    const updateBookById = (id, title) => {
        const newList = books.map((book) => {
            if (book.id === id) {
                return {...book, title};
            }
            return book;
        });
        setBooks(newList);
    }

    const handleChanges = (e) => {
        const newBook = {
            id: books.length + 1,
            name: e.target.value
        }
        setBook(newBook)
    }
    const addBooks = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const newBook = {
                    id: books.length + 1,
                    name: book.name
                };
                setBooks([...books, newBook]);
                Swal.fire(
                    'Added!',
                    'Your book has been added.',
                    'success'
                )
            } else if (result.isDenied) {
                Swal.fire(
                    'Cancelled',
                    'Your book is safe :)',
                    'error'
                )
            }
        }).catch((error) => {
            console.log(error);

        }).finally(() => {
            console.log("Finally");

        })

        const newBook = {
            id: books.length + 1,
            name: book.name
        };
        setBooks([...books, newBook]);
    }


    const removeColor = () => {
        const {color, ...rest} = fruit;
    }


    const handleBookCreate = (data) => {
        const addList = [...list, data];
        setList(addList);
    };


    const removeBookById = (deleteList) => {
        console.log(deleteList)
        const newList = list.filter((book, index) => {
            return index !== deleteList;
        })
        setList(newList);


    }
    const editBookByIndex = (editList, key) => {


        console.log(editList, key)
        const newList = list.map((book, index) => {
            if (index === key) {
                return {
                    ...book,
                    title: editList.title,
                    author: editList.author
                };
            }
            return book;
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
                    }>
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

                    </form>
                </div>
                <div className="row">


                    <div className="col-12">
                        <h1>Section 6</h1>
                        <BookList list={list} onDelete={removeBookById} onEdit={editBookByIndex}/>
                        <hr/>
                        <BookCreate onCreateBook={handleBookCreate} oncl/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section6;