import React, {useCallback, useContext, useEffect} from "react";
import Section8BookList from "./Section8BookList";
import Section8BookCreate from "./Section8BookCreate";
import useBooksContext from "../Hooks/useBooksContext";

function Section81() {

    const {fetchApi} =  useBooksContext();


    const  stableFetchApi = useCallback(
        fetchApi,
        []
    );


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