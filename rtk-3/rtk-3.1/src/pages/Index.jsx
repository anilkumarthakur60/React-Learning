import { useEffect, useState } from "react";
import { deleteItem, fetchPosts } from "../redux/postSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export function Index() {



    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts()).then(({ meta, payload, type }) => {
            return payload
        }).then(({ data }) => {
            setPosts(data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [dispatch]);



    const searchParams = new URLSearchParams({
        username: 'ali',
        name: 'ali',
        'filter[name]': 'ali',
        'filter[email]': 'emails'
    })


    const { data } = useSelector(state => state['posts'])



    const singlePost = (post) => {
        const { id, name, slug } = post
        return (
            <div className="col-sm-6 mb-3 mb-sm-0" key={id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{slug}</p>

                        <div className="d-flex ">

                            <Link to={{
                                pathname: `${id}`,
                                search: searchParams.toString(),
                            }} className="btn btn-primary ms-auto">Go somewhere</Link>

                            <button onClick={() => { dispatch(deleteItem(id)) }} className="btn btn-primary mx-2">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (<div>

        <div className="row g-4">
            {
                data.map((post) => {
                    return singlePost(post)
                })
            }
        </div>

    </div>
    );
}