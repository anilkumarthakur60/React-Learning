import {createContext, useState,useCallback} from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({children}) {


    const [list, setList] = useState([]);

    const fetchApi = async () => {
        await axios.get("http://127.0.0.1:8000/api/react/posts").then((response) => {
            setList(response.data.data);
        }).catch((error) => {
        }).finally(() => {

        })
    }

    const  stableFetchApi = useCallback(
        fetchApi,
        []
    );


    const removeBookById = (id) => {

        axios.delete(`http://127.0.0.1:8000/api/react/posts/${id}`).then((response) => {

            fetchApi();
        }).catch((error) => {
        }).finally(() => {
        })
    }
    const editBookByIndex = (editList) => {

        axios.put(`http://127.0.0.1:8000/api/react/posts/${editList.id}`, {
            name: editList.name,

        }).then((response) => {
            fetchApi();
        }).catch((error) => {
        }).finally(() => {
        })

    }
    const handleBookCreate = (data) => {


        axios.post(`http://127.0.0.1:8000/api/react/posts`, {
            name: data.name
        }).then((response) => {
            fetchApi();
        }).catch((error) => {
        }).finally(() => {
        })
    }

    const valueToShare = {
        list,
        fetchApi,
        removeBookById,
        editBookByIndex,
        handleBookCreate

    }

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    )
}


export {Provider};
export default BookContext;