import React, {useState} from "react";

function BookShow({book,}) {

    return (
        <>
                <div className="row my-3">
                    <div className="">
                        <i className="bi bi-camera-video"></i>
                    </div>
                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title"
                               onChange={(e) => {
                               book.title = e.target.value}
                               }
                               value={book.title}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control"
                               onChange={(e) => {
                                   book.author = e.target.value}
                               }
                               id="author"  value={book.author}

                        />
                    </div>

                </div>

        </>
    )


}

export default BookShow