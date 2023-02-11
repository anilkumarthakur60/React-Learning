import Button from "../Component/Button";
import useCounterHook from "../Hooks/useCounterHook";

function CounterPage({initialCount}) {

    console.log('---------data logging--------',initialCount);
    const {count,increment,decrement} = useCounterHook(initialCount);

    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <Button primary className="my-3" onClick={increment}>Increment</Button>
            <Button primary className="my-3" onClick={decrement}>decrement</Button>
        </div>
    );
}

export default CounterPage