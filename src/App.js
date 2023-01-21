import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import App1, {message1}  from "./App1";


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
    useEffect(() => {
            setInterval(() => {
                dates = new Date().toLocaleTimeString()
            }, 1000)
        }
    );
    return <>
        <div className="">
            <hr style={{border:"10px solid red"}}/>
            <div className="">App.js file</div>
            <div>
                {message}
                {m1.map((item, index) => {
                        return <div key={index}>{item.name}</div>
                    }
                )}

                <h1>{
                    dates

                }</h1>
            </div>
            <input autoFocus={true} type={`number`} style={{width: "500px"}} min={12} max={25}/>
            <br/>
            <br/>

            <textarea autoFocus={true} style={{width: "500px"}} maxLength={244} minLength={10}/>
            <br/>
            <br/>
            <input spellCheck title={`jdsahf jhdshf`} type={`text`} />
            {message1}

            <hr style={{border:"10px solid red"}}/>
            <div className="">App1.js Component</div>
            <App1/>
            <hr style={{border:"10px solid red"}}/>
        </div>
    </>;
}
export  default App;