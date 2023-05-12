import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/postSlice.js";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";


export function Index() {


    const [isFetched, setIsFetched] = useState(false)

    const [posts, setPosts] = useState([])

    const dipatch = useDispatch()

    useEffect(() => {

        dipatch(fetchPosts()).then(({ meta, payload, type }) => {
            setIsFetched(true)
            return payload
        }).then(({ data }) => {
            setPosts(data)
            setIsFetched(true)
        })
            .catch((err) => {
                console.log(err)
                setIsFetched(false)
            })
    }, [dipatch]);



    const searchParams = new URLSearchParams({
        username: 'ali',
        name: 'ali',
        'filter[name]': 'ali',
        'filter[email]': 'emails'
    })




    const singlePost = (post) => {
        const { id, name, slug } = post
        return (
            <div className="col-sm-6 mb-3 mb-sm-0" key={id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{slug}</p>
                        <Link to={{
                            pathname: `${id}`,
                            search: searchParams.toString(),
                        }} className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        )
    }

    return <div>

        <div className="row g-4">
            {
                posts.map((post) => {
                    return singlePost(post)
                })
            }
        </div>

    </div>
}