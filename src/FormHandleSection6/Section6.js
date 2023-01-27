import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import BookCreate from "./BookCreate.js";


function  Section6() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Section 6</h1>
                        <BookCreate/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section6;