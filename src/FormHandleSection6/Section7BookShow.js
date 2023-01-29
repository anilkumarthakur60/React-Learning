import React, {useState} from "react";
import Section7BookEdit from "./Section7BookEdit";

function Section7BookShow({book,  onDelete, onEdit}) {

    const [enableEdit, setEnableEdit] = useState(true)
    const handleDelete = () => {
        onDelete(book.id)
    }


    const [editBook, setEditBook] = useState({
        name: book.name,
    })
    const handleEdit = () => {
        setEnableEdit(!enableEdit)

    }
    const handleChanges = (e) => {
        const editedData = {
            ...editBook,
            [e.target.id]: e.target.value
        }
        console.log(editedData)
        setEditBook(editedData)
        onEdit(editedData, book.id)
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
                                            <i className={`bi bi-${enableEdit?'pencil':'x-circle'}`}></i>
                                        </button>

                        </div>
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Title</label>
                            <input type="text" className="form-control" id="name"
                                   disabled={enableEdit}
                                   onChange={handleChanges}
                                   value={book.name}
                            />
                        </div>

                        {
                            enableEdit?null:  <Section7BookEdit book={book} onEdit={onEdit} />
                        }
                    </div>
                </div>
            </div>
        </>
    )


}

export default Section7BookShow