import Button from "../Component/Button";
import {useState,useEffect} from "react";

function CounterPage18() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            {count}

            <Button primary className="my-3" onClick={increment}>Increment</Button>
            <Button primary className="my-3" onClick={decrement}>decrement</Button>
        </div>
    );
}

export default CounterPage18