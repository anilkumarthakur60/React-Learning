import React, {useState} from "react";

function BookCreate() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const result = await createBook({
        //     title: title,
        //
        // })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="author" value={author}
                               onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className="col-12 d-flex">

                    <button type="submit" className="btn btn-primary me-auto my-3">Submit</button>
                    </div>
                </div>
            </form>

        </>
    )


}

export default BookCreate