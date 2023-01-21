import React from "react";
import App1, {message11} from "./App1";
import Section41 from "./Section4/Section41";

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
            <hr style={{border: "10px solid red"}}/>
            <div className="">Section 4 Practice</div>
                <Section41/>

            <hr style={{border: "10px solid red"}}/>
            <div className="">Section 2 Practice</div>
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
            <input spellCheck title={`jdsahf jhdshf`} type={`text`}/>
            {message11}

            <hr style={{border: "10px solid red"}}/>
            <div className="">Section 3 Practice</div>
            <App1/>

        </div>
    </>;
}

export default App;