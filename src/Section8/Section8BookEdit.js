import React, {useContext, useState} from "react";
import BookContext from "../Context/books1";

function Section8BookEdit({book}) {


    const {editBookByIndex} = useContext(BookContext);
    const [editBook, setEditBook] = useState({
        title: book.title,
        author: book.author
    })


    const handleChanges = (e) => {
        const editedData = {
            ...editBook,
            [e.target.id]: e.target.value
        }
        setEditBook(editedData)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        editBookByIndex(editBook, book.id)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={editBook.title}
                               onChange={handleChanges}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" value={editBook.author}
                               onChange={handleChanges}/>
                    </div>
                    <div className="col-12 d-flex">

                    <button type="submit" className="btn btn-primary me-auto my-3">Submit</button>
                    </div>
                </div>
            </form>

        </>
    )


}

export default Section8BookEdit