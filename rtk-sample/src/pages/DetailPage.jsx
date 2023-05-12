import {Await, Form, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsDetail} from "../redux/postSlice.js";
import React, {useEffect} from "react";

function DetailPage() {


    const {id} = useParams()
    const urls = useLocation()
    const query = new URLSearchParams(urls.search)

    console.log('---------data logging-------username,', query.get('username'));
    console.log('---------data logging------name=>', query.get('name'));
    console.log('---------data logging------filter[name]=>', query.get('filter[name]'));
    console.log('---------data logging------filter[email]=>', query.get('filter[email]'));

    const {data, formData} = useSelector(state => state['posts'])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPostsDetail(id))
    }, [id])


    return (<div>
        <h1>Detail Page{id}</h1>

        <div className="row g-4">
            <div className="col-sm-6 mb-3 mb-sm-0" key={formData?.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{formData?.name}</h5>
                        <p className="card-text">{formData?.slug}</p>

                    </div>
                </div>
            </div>
        </div>

    </div>);
}

export default DetailPage;