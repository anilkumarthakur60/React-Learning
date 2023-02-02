import React, {useState, useContext} from "react";
import BooksContext from "../Context/books1";

function Section8BookCreate() {


    const {handleBookCreate} = useContext(BooksContext);
    const [book, setBook] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()
        handleBookCreate(book)
        setBook({})
    }
    const handleChanges = (e) => {


        setBook({
            ...book,
            [e.target.id]: e.target.value
        })

    }


    return (
        <>
            <form onSubmit={handleSubmit} className={`mt-4`}>
                <pre>{JSON.stringify(book)}</pre>
                <div className="row card p-2 ">
                    <div className="col-6 mt-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required={true}
                            value={book?.title}
                            onChange={(e) => {
                                handleChanges(e)
                            }}
                        />
                    </div>

                    <div className="col-12 d-flex">
                        <button type="submit" className="btn btn-primary me-auto my-3">Submit</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Section8BookCreate