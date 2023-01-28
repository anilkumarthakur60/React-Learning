import React, {useState} from "react";

function BookShow({book,itemKey,onDelete,onEdit}) {


    const [enableEdit,setEnableEdit] = useState(false)
    const handleDelete = () => {
        setEnableEdit(true)
        // onDelete(itemKey)
    }



    const [editBook,setEditBook] = useState({
        title:book.title,
        author:book.author
    })
    const handleEdit = () => {
        onEdit(editBook,itemKey)
    }
    const  handleChanges=(e) =>  {
     const editedData=   {
            ...editBook,
            [e.target.id]:e.target.value
        }

        setEditBook(editedData)

        onEdit(editedData,itemKey)


    }

    return (
        <>
            <div className="row my-3">
                <div className="d-flex">
                    <button type={`button`} onClick={handleDelete} className={`btn btn-sm ms-auto  btn-danger`}>
                        <i className="bi bi-trash"></i>

                    </button>
                    <button type={`button`} onClick={handleEdit} className={`btn btn-sm ms-1  btn-info`}>
                        <i className="bi bi-pencil-square"></i>
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
                          disabled={enableEdit?true:false}
                           onChange={handleChanges}
                           value={book.author}

                    />
                </div>

            </div>

        </>
    )


}

export default BookShow