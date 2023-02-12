import { useReducer } from 'react';
import Panel from "../Component/Panel";
import Button from "../Component/Button";

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + action.payload,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - action.payload,
            };
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        default:
            return state;
    }
};

function CounterPage19({ initialCount }) {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
            payload:  1,
        });
    };
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
            payload:  1,

        });
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    };

    return (
        <Panel className="m-3">

            <h1 className="text-lg"> Count is {state.count} </h1>

            <div className="flex flex-row">
                <Button primary className="my-3" onClick={increment}>Increment</Button>
                <Button secondary className="my-3 ml-4" onClick={decrement}>decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-1">

                    <div>
                        <label htmlFor="first_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a Lot
                        </label>
                        <input type="number" id="first_name"
                               value={state.valueToAdd||''}
                               onChange={handleChange}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="John" required/>
                    </div>
                    <div className="">
                        <Button primary  className="my-3" type="submit">Add</Button>
                    </div>
                </div>
            </form>
        </Panel>
    );
}

export default CounterPage19