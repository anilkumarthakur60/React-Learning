import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
function Section5() {

    return (
        <div className={`px-4`} style={{backgroundColor: '#f8d7da'}}>
            <SearchBar className="my-2" />
            <ImageList />
        </div>
    );
}
export default Section5;