import React, {useContext, useEffect} from "react";
import Section8BookList from "./Section8BookList";
import Section8BookCreate from "./Section8BookCreate";
import  BookContext from "../Context/books1";

function Section81() {

    const {fetchApi} = useContext(BookContext);

    useEffect(() => {
        fetchApi()
    },[]);


    return (
        <div>
           <Section8BookList/>
            <Section8BookCreate/>
        </div>

    )
}

export default Section81