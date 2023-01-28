import React from "react";

function BookShow({book,key,itemKey}) {
    const handleDelete = () => {
        console.log("Delete",book,itemKey);
    }

    return (
        <>
            <div className="row my-3">
                <div className="d-flex">
                    <button type={`button`} onClick={handleDelete} className={`btn btn-sm ms-auto  btn-danger`}>
                        <i className="bi bi-trash"></i>

                    </button>

                </div>
                <div className="col-12">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title"
                           onChange={(e) => {
                               book.title = e.target.value
                           }
                           }
                           value={book.title}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control"
                           onChange={(e) => {
                               book.author = e.target.value
                           }
                           }
                           id="author" value={book.author}

                    />
                </div>

            </div>

        </>
    )


}

export default BookShow