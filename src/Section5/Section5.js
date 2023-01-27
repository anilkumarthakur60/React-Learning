import React, {useState} from "react";
import SearchBar from "./SearchBar";
import {searchImages} from "../api";
import ImageList from "./ImageList";

function Section5() {

    const [data, setData] = useState([]);
    const [termSearch, setTermSearch] = useState('');
    const [page, setPage] = useState(1);
    const handleSubmit = async (term) => {
        setTermSearch(term)
        const result = await searchImages({
            termSearch: termSearch,
            page: page

        });
        setData(result);
    }

 const handlePageValue = async (page) => {
        setPage(page)
        const result = await searchImages({
            termSearch: termSearch,
            page: page

        });
        setData(result);
 }

    return (
        <div className={`px-4`} style={{backgroundColor: 'rgb(222 222 255)'}}>
            <SearchBar className="my-2"
                       handleClick={handleSubmit}
                       increasePage={handlePageValue}
            />
            <ImageList images={data} />
        </div>
    );
}

export default Section5;