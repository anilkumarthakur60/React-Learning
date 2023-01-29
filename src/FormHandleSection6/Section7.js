import React from "react";
import ReactDOM from "react-dom/client";
import {axiosInstance} from "../api_instance";

function  Section7() {

   const callApi=()=>{
       const data= axiosInstance.get("/posts").then((res)=>{
           console.log(res.data)
       })
   }
    return (
        <div>
            <button className="btn btn-primary" onClick={callApi}>Add Book 122 </button>

        </div>
    );
}
export default Section7;