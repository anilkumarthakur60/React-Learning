import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./SearchBar";
import {searchImages} from "../api";

function Section5() {

    const [data,setData]=useState('')
    searchImages(data).then((response) => {
        console.log(response.data.results);
    });


    return (
        <div className={`px-4`} style={{backgroundColor: 'rgb(222 222 255)'}}>
            {data}
            <SearchBar className="my-2"
                          handleClick={(value)=>{setData(value)}}
            />
            {/*<ImageList images={searchData} />*/}
        </div>
    );
}
export default Section5;