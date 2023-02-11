import React, { useState} from "react";
import  {message11} from "./App1";
import Section41 from "./Section4/Section41";
import Section5 from "./Section5/Section5";
import Section6 from "./Section7apiRequst/Section6";
import Section7ApiRelated from "./FormHandleSection6/Section7ApiRelated";
import Section8 from "./Section8/Section8";
import Section81MainFile from "./Section8/Section81MainFile";
import Section10 from "./Section10/Section10";
import Section11 from "./Section11/Section11";
import Section12 from "./Section12/Section12";
import Section13 from "./Section13/Section13";
import Section14 from "./Section14/Section14";
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
    const m2 = [
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}

    ];


    let dates = new Date().toLocaleTimeString()

    const [listData, setListData] = useState([
        {id: 1, name: "John"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Peter"}
    ]);
    const getList = (val) => {

        setListData(val)
    }


    return <>
        <div className="container-lg mx-20">
            <div className="">
                Section 14
                <Section14 ></Section14>
            </div>
            <hr style={{border: "10px solid green"}}/>


            <div className="">
                Section 13
                <Section13 ></Section13>
            </div>
            <hr style={{border: "10px solid green"}}/>


            <div className="">
                Section 12
                <Section12 ></Section12>
            </div>
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 11
                <Section11 ></Section11>
            </div>
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 10 Custom Navigation and routing system
                <Section10 ></Section10>
            </div>
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 8 Content
                <Section81MainFile listData={listData}></Section81MainFile>
            </div>
            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 8 Content
                    <Section8 listData={listData}></Section8>
            </div>

            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 7 Practice Form Handling

                <Section7ApiRelated lists={getList}></Section7ApiRelated>
            </div>

            <hr style={{border: "10px solid green"}}/>
            <div className="">
                Section 6 Practice Form Handling

                <Section6></Section6>
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