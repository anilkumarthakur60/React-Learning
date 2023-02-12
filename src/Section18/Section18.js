import CounterPage18 from "./CounterPage18";
import CounterPage181 from "./CounterPage181";

function  Section18(){
    return (
        <div>
            <h1>Section 18</h1>
            <CounterPage18 initialCount={0}></CounterPage18>
            <CounterPage181 initialCount={0}></CounterPage181>
        </div>
    );
}
export  default Section18