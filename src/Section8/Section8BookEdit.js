import React, {useContext, useState} from "react";
import useBooksContext from "../Hooks/useBooksContext";

function Section8BookEdit({book}) {


    const {editBookByIndex} =  useBooksContext();
    const [editBook, setEditBook] = useState({
        name: book.name,
        id: book.id
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
        editBookByIndex(editBook)
        setEditBook({
            name: "",
        })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Title</label>
                        <input type="text" className="form-control" id="name" value={editBook.name}
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