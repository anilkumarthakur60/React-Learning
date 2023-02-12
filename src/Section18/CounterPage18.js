import Button from "../Component/Button";
import {useReducer} from "react";
import Panel from "../Component/Panel";


const incrementCount='increment';
const  decrementCount='decrement';
const changeValueToAdd='change-value-to-add';
const  changeValue ='change-value'

const reducer = (state, action) => {

    console.log('---------data logging--------', state);
    switch (action.type) {
        case incrementCount:
            return {
                ...state,
                count: state.count + 1
            }
        case decrementCount:
            return {
                ...state,
                count: state.count - 1
            }
        case changeValue:
            return {
                ...state,
                count:  action.payload
            }
        case changeValueToAdd:
            return {
                ...state,
                valueToAdd: action.payload
            }
        default:
            return state;
    }
}

function CounterPage18({initalCount}) {

    const [state, dispatch] = useReducer(reducer, {
        count: initalCount,
        valueToAdd: 0

    })
    const increment = () => {

        dispatch({
            type: 'increment',
            payload: 1
        })

    }
    const decrement = () => {

        dispatch({
            type: 'decrement',
            payload: 1
        })
    }

    const handleChange = (e) => {

        const value = parseInt(e.target.value) || 0;
        console.log('---------data logging--------', value);
        dispatch({
            type: changeValue,
            payload: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: changeValue,
            payload: value
        })
    }

    return (
        <Panel className="m-3">

            <h1 className="text-lg"> Count is {state.count} </h1>

            <div className="flex flex-row">
                <Button primary className="my-3" onClick={increment}>Increment</Button>
                <Button secondary className="my-3 ml-4" onClick={decrement}>decrement</Button>
            </div>

            <form onSubmit={handleFormSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    //287 content id
                    <div>
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a Lot
                        </label>
                        <input type="number" id="first_name"

                               value={state.count}
                               onChange={handleChange}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="John" required/>
                    </div>
                    <div className="">
                        <Button primary onClick={handleFormSubmit} className="my-3" type="submit">Add</Button>
                    </div>
                </div>
            </form>
        </Panel>
    );
}

export default CounterPage18