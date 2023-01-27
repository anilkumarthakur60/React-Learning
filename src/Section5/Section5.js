import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./SearchBar";
import {searchImages} from "../api";
import ImageList from "./ImageList";

function Section5() {

    const [data, setData] = useState([]);
    const [termSearch, setTermSearch] = useState('Nepal');
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
    const increasePageSize = async () => {
        setPage(page + 1);
        const result = await searchImages({
            termSearch: termSearch,
            page: page

        });
        setData(result);
    }
    const decreasePageSize =async () => {
        if (page > 1) {
            setPage(page - 1);
            console.log(page)
            const result = await searchImages({
                termSearch: termSearch,
                page: page

            });
            setData(result);
        } else {
            setPage(1)
            const result = await searchImages({
                termSearch: termSearch,
                page: page

            });
            setData(result);
        }
    }
    return (
        <div className={`px-4`} style={{backgroundColor: 'rgb(222 222 255)'}}>
            <SearchBar className="my-2"
                       handleClick={handleSubmit}
                       increasePage={handlePageValue}
            />
            <ImageList images={data}/>
            <div className="row row-cols-12 ">
                <div className="d-flex">
                    <button type="button" onClick={decreasePageSize}
                            className={`btn btn-sm btn-success ms-auto`} >Previous
                    </button>
                    <button type="button" onClick={increasePageSize}
                            className={`btn btn-sm btn-danger me-auto`}>Next
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Section5;