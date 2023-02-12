import CounterPage19 from "./CounterPage19";
import CounterPage191 from "./CounterPage191";

function  Section19(){
    return (
        <div>
            <h1>Section 19 Redux</h1>
            <CounterPage19 initialCount={0}></CounterPage19>
            <CounterPage191 initialCount={0}></CounterPage191>
        </div>
    );
}
export  default Section19