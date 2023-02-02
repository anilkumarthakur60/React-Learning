import React, {useContext, useState} from "react";
import Section8BookEdit from "./Section8BookEdit";
import BookContext from "../Context/books1";

function Section8BookShow({book}) {
    const {removeBookById,editBookByIndex} = useContext(BookContext);

    const [enableEdit, setEnableEdit] = useState(true)
    const handleDelete = () => {
        removeBookById(book.id)
    }


    const [editBook, setEditBook] = useState({
        title: book.title,
        author: book.author
    })
    const handleEdit = () => {
        setEnableEdit(!enableEdit)

    }
    const handleChanges = (e) => {
        const editedData = {
            ...editBook,
            [e.target.id]: e.target.value
        }
        setEditBook(editedData)
        editBookByIndex(editedData, book.id)
    }



    return (
        <>
            <div className="col-3 col-sm-6   mt-4">
                <div className="card h-100 bg-light px-3 ">
                    <div className="row my-3">
                        <div className="d-flex">


                                        <button type={`button`} onClick={handleDelete} className={`btn btn-sm ms-auto  btn-danger`}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                        <button type={`button`} onClick={handleEdit} className={`btn btn-sm ms-2  ${enableEdit?'btn-info':'btn-primary'}`}>
                                            <i className={`bi bi-${enableEdit?'x-circle':'pencil'}`}></i>
                                        </button>

                        </div>
                        <div className="col-12">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title"
                                   disabled={enableEdit}
                                   onChange={handleChanges}
                                   value={book.title}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input type="text" className="form-control"
                                   id={`author`}
                                   disabled={enableEdit}
                                   onChange={handleChanges}
                                   value={book.author}
                            />
                        </div>
                        {
                            enableEdit?  <Section8BookEdit book={book}  /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )


}

export default Section8BookShow