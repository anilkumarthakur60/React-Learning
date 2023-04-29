import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="">
                <button className={`btn btn-sm btn-primary `} onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>

            <div className="container-fluid p-5   ">

                <div className="row">

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                </div>


                <div className="row bg-dark rounded-4">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
                            return (
                                <div className="col-lg-2 col-md-4 col-sm-6 col-12 g-4   " key={index}>
                                    <div className="card  rounded-4 ">
                                        <img src="https://via.placeholder.com/100" className="img-fluid  rounded-4 "
                                             alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Blog Post Title</h5>
                                            <a href="#" className="btn btn-primary">Read More →</a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            Posted on January 1, 2023 by John Doe
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default App
