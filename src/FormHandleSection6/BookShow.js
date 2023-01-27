import React, {useState} from "react";

function BookShow({book}) {
    const [title, setTitle] = useState(book.title)
    return (
        <>
                <div className="row my-3">
                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" readOnly value={book.title}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" readOnly value={book.author}

                        />
                    </div>

                </div>

        </>
    )


}

export default BookShow