import React, {useState} from "react";

function    Section7BookCreate({onCreateBook}) {
    const [book,setBook]=useState({
        title:'',
        author:''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        onCreateBook(book)
    }
    const  handleChanges=(e) =>  {



        setBook({
            ...book,
            [e.target.id]:e.target.value
        })

    }


    return (
        <>
            <form onSubmit={handleSubmit} className={`mt-4`}>
                <div className="row card p-2 ">
                    <div className="col-6 mt-3">
                        <label htmlFor="name" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required={true}
                            value={book?.name}
                            onChange={(e) => {handleChanges(e)}}
                        />
                    </div>

                    <div className="col-12 d-flex">
                        <button type="submit"  className="btn btn-primary me-auto my-3">Submit</button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Section7BookCreate