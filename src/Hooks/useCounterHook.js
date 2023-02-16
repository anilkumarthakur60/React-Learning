import {useEffect, useState} from "react";

function useCounterHook(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
    }, [count]);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return {
        count: count,
        decrement: decrement,
        increment: increment
    }
}
export  default useCounterHook;