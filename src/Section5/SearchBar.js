import React from "react";

import ReactDOM from "react-dom/client";
import ImageList from "./ImageList";
function SearchBar() {

    return (
        <div className={``} style={{backgroundColor: '#f8d7da'}}>
            <div className="row">
                <input type="text" className="form-control" placeholder="Search"/>

            </div>
        </div>
    );
}
export default SearchBar;