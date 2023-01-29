import React, {useEffect} from "react";
import App1, {message11} from "./App1";
import Section41 from "./Section4/Section41";
import Section5 from "./Section5/Section5";
import Section7 from "./Section7apiRequst/Section7";
import {axiosInstance} from "./api_instance";
import Section7 from "./FormHandleSection6/Section7";

function App() {
    let message = "How are you?";




    if (Math.random() > 0.5) {
        message = "I'm fine";
    }

    const m1 = [
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}

    ];


    let dates = new Date().toLocaleTimeString()
    return <>
        <div className="container">
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 7 Practice Form Handling
                <Section7/>
            </div>
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 6 Practice Form Handling
                <Section7/>
            </div>

            <hr style={{border: "10px solid red"}}/>
            <div className="">Section 5 Practice
                <Section5/>
            </div>

            <hr style={{border: "10px solid red"}}/>
            <div className="">Section 4 Practice
                <p>{message11}</p>
                <Section41/>
            </div>


            <hr style={{border: "10px solid red"}}/>
            <div className="row ">
                <h6>Section 3 Practice</h6>
                <p>{message11}</p>
                {/*<App1/>*/}
            </div>


        </div>
    </>;
}

export default App;