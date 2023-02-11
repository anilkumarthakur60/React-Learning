import Button from "../Component/Button";
import {useState} from "react";
import Panel from "../Component/Panel";

function CounterPage18() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    const handleChange = (e) => {
        if (typeof parseInt(e.target.value) === 'number') {
            setCount(count + parseInt(e.target.value));
        } else {
            console.log('not a number');
        }
    }

    return (
        <Panel className="m-3">

            <h1 className="text-lg"> Count is {count}</h1>

            <div className="flex flex-row">
                <Button primary className="my-3" onClick={increment}>Increment</Button>
                <Button secondary className="my-3 ml-4" onClick={decrement}>decrement</Button>
            </div>

            <form action="">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a Lot
                        </label>
                        <input type="number" id="first_name"

                               onChange={handleChange}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="John" required/>
                    </div>
                </div>
            </form>
        </Panel>
    );
}

export default CounterPage18