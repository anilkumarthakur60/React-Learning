import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import Section7BookList from "./Section7BookList";
import Section7BookCreate from "./Section7BookCreate";
import axios from "axios";


function Section7ApiRelated() {
    const [list, setList] = useState([]);

    const fetchApi = async () => {
      await axios.get("http://127.0.0.1:8000/api/react/posts").then((response) => {
              setList(response.data.data);
       }).catch((error) => {
              console.log(error);
       }).finally(() => {

       })
    }


    useEffect(() => {
        fetchApi();
    }, []);


    const removeBookById = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/react/posts/${id}`).then((response) => {
            console.log(response);

            fetchApi();
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("Finally");
        })
    }
    const editBookByIndex = (editList, key) => {
        console.log(editList, key   )

        axios.put(`http://127.0.0.1:8000/api/react/posts/${key}`,{
            name: editList.name,

        }).then((response) => {
            fetchApi();
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("Finally");
        })

    }
    const handleBookCreate = (data) => {
        axios.post(`http://127.0.0.1:8000/api/react/posts`,{
            name: data.name,

        }).then((response) => {
            fetchApi();
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            console.log("Finally");
        })
    }


    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <h6>Section 6</h6>
                        <Section7BookList list={list} onDelete={removeBookById} onEdit={editBookByIndex}/>
                        <hr/>
                        <Section7BookCreate onCreateBook={handleBookCreate} oncl/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section7ApiRelated;